import { Transform } from 'class-transformer';
import { IsEmail, IsOptional, IsString, Length, Matches } from 'class-validator';

const trim = ({ value }: { value: unknown }): unknown =>
  typeof value === 'string' ? value.trim() : value;

export class CreateLeadDto {
  @Transform(trim)
  @IsString()
  @Length(2, 120)
  name!: string;

  @Transform(trim)
  @IsString()
  @Length(7, 40)
  @Matches(/^[+()\d\s.-]+$/, {
    message: 'Телефон может содержать только цифры и служебные символы',
  })
  phone!: string;

  @Transform(trim)
  @IsOptional()
  @IsEmail()
  @Length(3, 254)
  email?: string;

  @Transform(trim)
  @IsString()
  @Length(10, 2000)
  message!: string;
}
