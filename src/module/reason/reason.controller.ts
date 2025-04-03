import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ReasonService } from './service/reason.service';
import { Reason } from '@prisma/client';
import { Public } from '../auth/auth.guard';

@Controller('reason')
export class ReasonController {
  constructor(private readonly reasonService: ReasonService) {}

  @Post()
  async createReason(
    @Body() reasonData: { group: string; description: string },
  ): Promise<Reason> {
    return this.reasonService.createReason(reasonData);
  }

  @Get()
  @Public()
  async getAllReasons(): Promise<Reason[]> {
    return this.reasonService.getAllReasons();
  }

  @Get(':id')
  async getReasonById(@Param('id') id: number): Promise<Reason | null> {
    return this.reasonService.getReasonById(id);
  }

  @Put(':id')
  async updateReason(
    @Param('id') id: number,
    @Body() reasonData: { group?: string; description?: string },
  ): Promise<Reason> {
    return this.reasonService.updateReason(id, reasonData);
  }

  @Delete(':id')
  async deleteReason(@Param('id') id: number): Promise<Reason> {
    return this.reasonService.deleteReason(id);
  }
}
