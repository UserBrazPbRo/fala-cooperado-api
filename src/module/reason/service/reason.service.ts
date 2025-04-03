import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/module/prisma/service/prisma.service';
import { Prisma, Reason } from '@prisma/client';

@Injectable()
export class ReasonService {
  constructor(private readonly prisma: PrismaService) {}

  async createReason(data: Prisma.ReasonCreateInput): Promise<Reason> {
    return this.prisma.reason.create({ data });
  }

  async getAllReasons(): Promise<Reason[]> {
    return this.prisma.reason.findMany();
  }

  async getReasonById(id: number): Promise<Reason | null> {
    return this.prisma.reason.findUnique({ where: { id } });
  }

  async updateReason(
    id: number,
    data: Prisma.ReasonUpdateInput,
  ): Promise<Reason> {
    return this.prisma.reason.update({
      where: { id },
      data,
    });
  }

  async deleteReason(id: number): Promise<Reason> {
    return this.prisma.reason.delete({ where: { id } });
  }
}
