import { Module } from '@nestjs/common';
import { FeedbackService } from './service/feedback.service';
import { FeedbackController } from './feedback.controller';
import { PrismaService } from 'src/module/prisma/service/prisma.service';

@Module({
  controllers: [FeedbackController],
  providers: [FeedbackService, PrismaService],
})
export class FeedbackModule {}
