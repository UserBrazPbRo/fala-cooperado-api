import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PaService } from './services/pa.service';
import { Pa } from '@prisma/client';
import { Public } from '../auth/auth.guard';

@Controller('pa')
export class PaController {
  constructor(private readonly paService: PaService) {}

  @Post()
  async createPa(@Body() paData: { description: string }): Promise<Pa> {
    return this.paService.createPa(paData);
  }

  @Get()
  @Public()
  async getAllPas(): Promise<Pa[]> {
    return this.paService.getAllPas();
  }

  @Get(':id')
  async getPaById(@Param('id') id: number): Promise<Pa | null> {
    return this.paService.getPaById(id);
  }

  @Put(':id')
  async updatePa(
    @Param('id') id: number,
    @Body() paData: { description?: string },
  ): Promise<Pa> {
    return this.paService.updatePa(id, paData);
  }

  @Delete(':id')
  async deletePa(@Param('id') id: number): Promise<Pa> {
    return this.paService.deletePa(id);
  }
}
