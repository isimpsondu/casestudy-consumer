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

  async createProduct(Product: Product): Promise<Product> {
    try {
      // call to our dependencies
      const createdProduct = await this.dataServices.products.create(Product);

      return createdProduct;
    } catch (error) {
      throw error;
    }
  }

  updateProduct(ProductId: string, Product: Product): Promise<Product> {
    return this.dataServices.products.update(ProductId, Product);
  }
}
