import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import {
  ProductServices,
  ProductFactoryService,
} from '../services/use-cases/product';
import { UpsertProductDto } from '../core/dtos';

@Controller()
export class ProductConsumerController {
  constructor(
    private productServices: ProductServices,
    private productFactoryService: ProductFactoryService,
  ) {}

  @MessagePattern('create-product')
  async createProduct(@Payload('value') upsertProductDto: UpsertProductDto) {
    const response = `Receiving a new message: ${JSON.stringify(
      upsertProductDto,
    )}`;
    console.log(response);

    const product = this.productFactoryService.upsertProduct(upsertProductDto);
    try {
      const createdProduct = await this.productServices.upsertProduct(
        product.productId,
        product,
      );
      return createdProduct;
    } catch (error) {
      console.error(error);
    }
  }
}
