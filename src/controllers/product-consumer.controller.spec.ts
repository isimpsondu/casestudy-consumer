import { Test, TestingModule } from '@nestjs/testing';
import { ProductConsumerController } from './product-consumer.controller';
import {
  ProductServices,
  ProductFactoryService,
} from '../services/use-cases/product';
import { UpsertProductDto } from '../core/dtos';
import { Product } from '../core/entities/product.entity';

class ProductServicesMock {
  upsertProduct(productId: string, product: Product): Product {
    return product;
  }
}

describe('ProductConsumerController', () => {
  let productConsumerController: ProductConsumerController;

  beforeEach(async () => {
    const ProductServicesProvider = {
      provide: ProductServices,
      useClass: ProductServicesMock,
    };

    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductConsumerController],
      providers: [ProductServicesProvider, ProductFactoryService],
    }).compile();

    productConsumerController = app.get<ProductConsumerController>(
      ProductConsumerController,
    );
  });

  describe('readMessage', () => {
    it('should return the created product', async () => {
      const upsertProductDto = new UpsertProductDto();
      const product = await productConsumerController.createProduct(
        upsertProductDto,
      );
      expect(product.productId).toEqual(upsertProductDto.productId);
      expect(product.price).toEqual(upsertProductDto.price);
      expect(product.stock).toEqual(upsertProductDto.stock);
    });
  });
});
