import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/module/prisma/service/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  private logger = new Logger('User service');

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    this.logger.log('userById');
    const user = await this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
    return user;
  }

  async findByLogin(login: string): Promise<User | null> {
    this.logger.log('userByLogin');
    const user = await this.prisma.user.findUnique({
      where: { login: login },
    });
    return user;
  }

  async getAllUsers() {
    this.logger.log('getAllUsers');
    const users = await this.prisma.$queryRawUnsafe<any[]>(
      ' SELECT t1.*, t2.description FROM usuario t1 left join pa t2 on (t2.id = t1."paId")',
    );
    return users;
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    this.logger.log('createUser');
    const createUser = await this.prisma.user.create({
      data,
    });
    return createUser;
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    this.logger.log('updateUser');
    const updateUser = await this.prisma.user.update({
      where: params.where,
      data: params.data,
    });
    return updateUser;
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    this.logger.log('deleteUser');
    const deleteUser = await this.prisma.user.delete({
      where,
    });
    return deleteUser;
  }
}
