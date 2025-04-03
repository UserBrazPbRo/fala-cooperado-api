import { Module } from '@nestjs/common';
import { ReasonService } from './service/reason.service';
import { ReasonController } from './reason.controller';
import { PrismaService } from 'src/module/prisma/service/prisma.service';

@Module({
  controllers: [ReasonController],
  providers: [ReasonService, PrismaService],
})
export class ReasonModule {}
