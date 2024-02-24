import { IsAlpha, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateHero {
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsAlpha()
  name: string;

  @IsString()
  gambar: string;
}
