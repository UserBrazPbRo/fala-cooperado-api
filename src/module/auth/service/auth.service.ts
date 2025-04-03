import {
  forwardRef,
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../../user/service/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserDto } from '../../../dto/create-user.dto';

@Injectable()
export class AuthService {
  private logger = new Logger('Auth service');

  saltOrRounds: number = 10;

  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(login, password) {
    this.logger.log('signIn');
    const user = await this.userService.findByLogin(login);
    if (user?.password !== password) {
      const isMatch = await bcrypt.compare(password, user?.password);

      if (!isMatch) {
        throw new UnauthorizedException();
      }
    }

    const payload = { sub: user?.id, login: user?.login };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async update(id: number, payload: UserDto) {
    this.logger.log('update');

    const user = await this.userService.user({ id: id });
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const hashPass = await bcrypt.hash(payload.password, this.saltOrRounds);

    const updatedUser = await this.userService.updateUser({
      where: { id: user.id },
      data: {
        password: hashPass,
        type: payload.type,
      },
    });

    return updatedUser;
  }

  async signUp(payload: UserDto) {
    this.logger.log('signUp');
    const hashPass = await bcrypt.hash(payload.password, this.saltOrRounds);

    const data = {
      ...payload,
      password: hashPass,
    };

    const user = await this.userService.createUser(data);
    return user;
  }
}
