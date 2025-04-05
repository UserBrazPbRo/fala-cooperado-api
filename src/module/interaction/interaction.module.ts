import { Module } from '@nestjs/common';
import { InteractionService } from './service/interaction.service';
import { InteractionController } from './interaction.controller';
import { PrismaService } from 'src/module/prisma/service/prisma.service';

@Module({
  controllers: [InteractionController],
  providers: [InteractionService, PrismaService],
})
export class InteractionModule {}
