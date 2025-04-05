import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './service/user.service';
import { User as UserModel } from '@prisma/client';
import { AuthService } from '../auth/service/auth.service';
import { Public } from '../auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async getUser(@Param('id') id: number) {
    return this.userService.user({ id: id });
  }

  @Post()
  @Public()
  async signupUser(
    @Body() userData: { login: string; password: string; type: string },
  ): Promise<UserModel> {
    return this.authService.signUp(userData);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body()
    userData: { login: string; password: string; type: string; paId: number },
  ): Promise<UserModel> {
    return this.authService.update(id, {
      password: userData.password,
    });
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<UserModel> {
    return this.userService.deleteUser({ id: Number(id) });
  }
}
