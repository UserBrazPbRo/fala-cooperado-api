export class CreateFeedbackDto {
  feedback: string;
  email?: string;
  cpf?: string;
  paId?: number;
  reasonId?: number;
}

export class UpdateFeedbackDto {
  feedback?: string;
  email?: string;
  cpf?: string;
  paId?: number;
  reasonId?: number;
}
