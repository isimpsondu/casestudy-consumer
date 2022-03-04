import { Injectable } from '@nestjs/common';
import { Product } from '../../../core/entities';
import { CreateProductDto, UpdateProductDto } from '../../../core/dtos';

@Injectable()
export class ProductFactoryService {
  createNewProduct(createProductDto: CreateProductDto) {
    const newProduct = new Product();
    newProduct.productId = createProductDto.productId;
    newProduct.price = createProductDto.price;
    newProduct.stock = createProductDto.stock;
    newProduct.updatedAt = createProductDto.updatedAt;

    return newProduct;
  }

  updateProduct(updateProductDto: UpdateProductDto) {
    const newProduct = new Product();
    newProduct.productId = updateProductDto.productId;
    newProduct.price = updateProductDto.price;
    newProduct.stock = updateProductDto.stock;
    newProduct.updatedAt = updateProductDto.updatedAt;

    return newProduct;
  }
}
