import { IsString, IsNotEmpty } from 'class-validator';

export class UpsertProductDto {
  @IsString()
  @IsNotEmpty()
  productId: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  stock: number;
}
