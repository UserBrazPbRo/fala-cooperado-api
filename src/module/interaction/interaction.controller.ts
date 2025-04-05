import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
} from '@nestjs/common';
import { InteractionService } from './service/interaction.service';
import { Interaction } from '@prisma/client';
import { Public } from '../auth/auth.guard';

@Controller('interaction')
export class InteractionController {
  constructor(private readonly interactionService: InteractionService) {}

  @Post()
  async createInteraction(
    @Body()
    interactionData: {
      interaction: string;
      feedbackId?: number;
      userId: number;
    },
    @Request() req,
  ): Promise<Interaction> {
    interactionData.userId = req.user.sub;

    return this.interactionService.createInteraction(interactionData);
  }

  @Get()
  async getAllInteractions(): Promise<Interaction[]> {
    return this.interactionService.getAllInteractions();
  }

  @Get('feedback/:id')
  async getAllInteractionsByFeedback(@Param('id') id: number): Promise<any[]> {
    return this.interactionService.getInteractionByFeedbackId(Number(id));
  }

  @Public()
  @Get('feedback/code/:code')
  async getAllInteractionsByFeedbackCode(
    @Param('code') code: string,
  ): Promise<any[]> {
    return this.interactionService.getInteractionByFeedbackCode(code);
  }

  @Get(':id')
  async getInteractionById(
    @Param('id') id: number,
  ): Promise<Interaction | null> {
    return this.interactionService.getInteractionById(id);
  }

  @Put(':id')
  async updateInteraction(
    @Param('id') id: number,
    @Body() interactionData: { interaction?: string; feedbackId?: number },
  ): Promise<Interaction> {
    return this.interactionService.updateInteraction(id, interactionData);
  }

  @Delete(':id')
  async deleteInteraction(@Param('id') id: number): Promise<Interaction> {
    return this.interactionService.deleteInteraction(id);
  }
}
