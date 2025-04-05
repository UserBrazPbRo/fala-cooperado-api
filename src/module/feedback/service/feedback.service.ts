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
      include: { Interaction: true },
      where: { code },
    });
  }

  async getAllFeedbacksByUserPaId(userId: number): Promise<Feedback[]> {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    return this.prisma.feedback.findMany({
      include: { pa: true, reason: true },
      where: { paId: user?.paId },
    });
  }

  async getAllFeedbacks(): Promise<Feedback[]> {
    return this.prisma.feedback.findMany({
      include: { pa: true, reason: true },
    });
  }

  async getFeedbackById(id: number): Promise<Feedback | null> {
    const result = await this.prisma.feedback.findUnique({
      include: { Interaction: true },
      where: { id },
    });

    return result;
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
