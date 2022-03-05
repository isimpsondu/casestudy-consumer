import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  productId: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  stock: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
