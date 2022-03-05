import { Injectable } from '@nestjs/common';
import { Product } from '../../../core/entities';
import { UpsertProductDto } from '../../../core/dtos';

@Injectable()
export class ProductFactoryService {
  upsertProduct(upsertProductDto: UpsertProductDto) {
    const newProduct = new Product();
    newProduct.productId = upsertProductDto.productId;
    newProduct.price = upsertProductDto.price;
    newProduct.stock = upsertProductDto.stock;
    newProduct.updatedAt = new Date().toISOString();

    return newProduct;
  }
}
