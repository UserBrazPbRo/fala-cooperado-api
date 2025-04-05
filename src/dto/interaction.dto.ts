export class CreateInteractionDto {
  interaction: string;
  feedbackId?: number;
}

export class UpdateInteractionDto {
  interaction?: string;
  feedbackId?: number;
}
