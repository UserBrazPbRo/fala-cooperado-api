export class UserDto {
  login?: string;
  password?: string;
  type?: string;
  paId?: number;
}

export class CreateUserDto {
  login: string;
  password: string;
  type: string;
  paId?: number;
}
