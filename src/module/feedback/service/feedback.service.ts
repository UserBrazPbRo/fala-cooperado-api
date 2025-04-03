import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/module/prisma/service/prisma.service';
import { Prisma, Feedback } from '@prisma/client';

@Injectable()
export class FeedbackService {
  constructor(private readonly prisma: PrismaService) {}

  async createFeedback(data: Prisma.FeedbackCreateInput): Promise<Feedback> {
    return this.prisma.feedback.create({ data });
  }

  async getFeedbackByCode(code: string): Promise<Feedback | null> {
    return this.prisma.feedback.findFirst({
      where: { code },
    });
  }

  async getAllFeedbacks(): Promise<Feedback[]> {
    return this.prisma.feedback.findMany();
  }

  async getFeedbackById(id: number): Promise<Feedback | null> {
    return this.prisma.feedback.findUnique({ where: { id } });
  }

  async updateFeedback(
    id: number,
    data: Prisma.FeedbackUpdateInput,
  ): Promise<Feedback> {
    return this.prisma.feedback.update({
      where: { id },
      data,
    });
  }

  async deleteFeedback(id: number): Promise<Feedback> {
    return this.prisma.feedback.delete({ where: { id } });
  }
}
