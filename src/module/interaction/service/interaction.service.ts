import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/module/prisma/service/prisma.service';
import { Prisma, Interaction } from '@prisma/client';

@Injectable()
export class InteractionService {
  constructor(private readonly prisma: PrismaService) {}

  async createInteraction(
    data: Prisma.InteractionCreateInput,
  ): Promise<Interaction> {
    return this.prisma.interaction.create({ data });
  }

  async getAllInteractions(): Promise<Interaction[]> {
    return this.prisma.interaction.findMany();
  }

  async getInteractionById(id: number): Promise<Interaction | null> {
    return this.prisma.interaction.findUnique({ where: { id } });
  }

  async getInteractionByFeedbackCode(code: string): Promise<any | null> {
    const result = await this.prisma.feedback.findFirst({
      where: { code: code },
    });

    return this.prisma.interaction.findMany({
      where: { feedbackId: result?.id },
      include: { user: true },
      orderBy: { create_at: 'desc' },
    });
  }

  async getInteractionByFeedbackId(id: number): Promise<any | null> {
    return this.prisma.interaction.findMany({
      where: { feedbackId: id },
      include: { user: true },
      orderBy: { create_at: 'desc' },
    });
  }

  async updateInteraction(
    id: number,
    data: Prisma.InteractionUpdateInput,
  ): Promise<Interaction> {
    return this.prisma.interaction.update({
      where: { id },
      data,
    });
  }

  async deleteInteraction(id: number): Promise<Interaction> {
    return this.prisma.interaction.delete({ where: { id } });
  }
}
