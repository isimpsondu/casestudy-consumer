import { Injectable } from '@nestjs/common';
import { Product } from '../../../core/entities';
import { IDataServices } from '../../../core/abstracts';

@Injectable()
export class ProductServices {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getAllProducts(): Promise<Product[]> {
    return this.dataServices.products.getAll();
  }

  upsertProduct(productId: string, product: Product): Promise<Product> {
    return this.dataServices.products.upsert({ productId }, product);
  }
}
