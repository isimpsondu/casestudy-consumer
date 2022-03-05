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

  @MessagePattern('upsert-product')
  async upsertProductHandler(
    @Payload('value') upsertProductDto: UpsertProductDto,
  ) {
    const response = `Receiving a new message: ${JSON.stringify(
      upsertProductDto,
    )}`;
    console.log(response);

    const product = this.productFactoryService.upsertProduct(upsertProductDto);
    try {
      const upsertedProduct = await this.productServices.upsertProduct(
        product.productId,
        product,
      );
      return upsertedProduct;
    } catch (error) {
      console.error(error);
    }
  }

  @MessagePattern('upsert-product-dead-letter')
  async upsertProductDeadLetterHandler(
    @Payload('value') upsertProductDto: UpsertProductDto,
  ) {
    const response = `Receiving a new message: ${JSON.stringify(
      upsertProductDto,
    )}`;
    // TO DO - handle failed case
    console.log(response);
  }
}
