import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/module/prisma/service/prisma.service';
import { Prisma, Pa } from '@prisma/client';

@Injectable()
export class PaService {
  constructor(private readonly prisma: PrismaService) {}

  async createPa(data: Prisma.PaCreateInput): Promise<Pa> {
    return this.prisma.pa.create({ data });
  }

  async getAllPas(): Promise<Pa[]> {
    return this.prisma.pa.findMany();
  }

  async getPaById(id: number): Promise<Pa | null> {
    return this.prisma.pa.findUnique({ where: { id } });
  }

  async updatePa(id: number, data: Prisma.PaUpdateInput): Promise<Pa> {
    return this.prisma.pa.update({
      where: { id },
      data,
    });
  }

  async deletePa(id: number): Promise<Pa> {
    return this.prisma.pa.delete({ where: { id } });
  }
}
