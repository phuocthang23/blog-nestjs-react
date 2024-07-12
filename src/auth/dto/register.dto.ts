import { IsBoolean, IsString } from 'class-validator';

export class RegisterUserDto {
  @IsString()
  fistName: string;

  @IsString()
  lastName: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsBoolean()
  status: boolean = true;
}
