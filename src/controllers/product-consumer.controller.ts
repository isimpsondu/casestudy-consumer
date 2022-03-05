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
  async readMessage(@Payload('value') createProductDto: UpsertProductDto) {
    const response = `Receiving a new message: ${JSON.stringify(
      createProductDto,
    )}`;
    console.log(response);

    const product = this.productFactoryService.upsertProduct(createProductDto);
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
