import { Controller } from '@nestjs/common';
import {
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import {
  ProductServices,
  ProductFactoryService,
} from '../services/use-cases/product';
import { CreateProductDto } from '../core/dtos';

@Controller()
export class ProductConsumerController {
  constructor(
    private productServices: ProductServices,
    private productFactoryService: ProductFactoryService,
  ) {}

  @MessagePattern('product')
  async readMessage(@Payload('value') createProductDto: CreateProductDto) {
    const response =
      `Receiving a new message from topic: product: ` +
      JSON.stringify(createProductDto);
    console.log(response);

    const product =
      this.productFactoryService.createNewProduct(createProductDto);
    const createdProduct = await this.productServices.createProduct(product);
    return createdProduct;
  }
}
