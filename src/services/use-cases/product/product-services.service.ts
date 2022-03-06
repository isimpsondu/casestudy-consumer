import { Injectable } from '@nestjs/common';
import { Product } from '../../../core/entities';
import { IDataServices } from '../../../core/abstracts';

@Injectable()
export class ProductService {
  constructor(
    private dataServices: IDataServices,
  ) {}

  upsertProduct(productId: string, product: Product): Promise<Product> {
    return this.dataServices.products.upsert({ productId }, product);
  }
}
