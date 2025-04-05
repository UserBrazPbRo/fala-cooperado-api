import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FeedbackService } from './service/feedback.service';
import { Feedback } from '@prisma/client';
import { Public } from '../auth/auth.guard';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  @Public()
  async createFeedback(
    @Body()
    feedbackData: {
      feedback: string;
      title: string;
      email?: string | null;
      cpf?: string | null;
      paId: number;
      reasonId?: number;
    },
  ): Promise<Feedback> {
    return this.feedbackService.createFeedback(feedbackData);
  }

  @Get()
  async getAllFeedbacks(): Promise<Feedback[]> {
    return this.feedbackService.getAllFeedbacks();
  }

  @Get('code/:code')
  @Public()
  async getFeedbackByCode(
    @Param('code') code: string,
  ): Promise<Feedback | null> {
    return this.feedbackService.getFeedbackByCode(code);
  }

  @Get(':id')
  async getFeedbackById(@Param('id') id: number): Promise<Feedback | null> {
    return this.feedbackService.getFeedbackById(Number(id));
  }

  @Put(':id')
  async updateFeedback(
    @Param('id') id: number,
    @Body()
    feedbackData: {
      feedback?: string;
      email?: string;
      cpf?: string;
      paId?: number;
      reasonId?: number;
    },
  ): Promise<Feedback> {
    return this.feedbackService.updateFeedback(id, feedbackData);
  }

  @Delete(':id')
  async deleteFeedback(@Param('id') id: number): Promise<Feedback> {
    return this.feedbackService.deleteFeedback(id);
  }
}
