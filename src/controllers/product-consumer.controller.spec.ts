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

  describe('upsertProduct', () => {
    it('should return the upserted product', async () => {
      const upsertProductDto: UpsertProductDto = {
        productId: '99c517d3-6759-4872-9bf4-2a776d3c2a33',
        price: 54.88,
        stock: 1000
      };
      const product = await productConsumerController.upsertProductHandler(
        upsertProductDto,
      );
      expect(product.productId).toEqual(upsertProductDto.productId);
      expect(product.price).toEqual(upsertProductDto.price);
      expect(product.stock).toEqual(upsertProductDto.stock);
    });
  });
});
