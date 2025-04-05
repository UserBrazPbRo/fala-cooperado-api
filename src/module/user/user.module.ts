import { Module } from '@nestjs/common';
import { UserController } from 'src/module/user/user.controller';
import { UserService } from 'src/module/user/service/user.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
