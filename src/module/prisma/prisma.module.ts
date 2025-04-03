import { Module } from '@nestjs/common';
import { PrismaService } from 'src/module/prisma/service/prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
