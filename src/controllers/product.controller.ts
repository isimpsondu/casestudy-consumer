import { Controller, Get } from '@nestjs/common';
import { ProductServices } from '../services/use-cases/product';

@Controller('api/product')
export class ProductController {
  constructor(private readonly productServices: ProductServices) {}

  @Get('all')
  async getAll() {
    return this.productServices.getAllProducts();
  }
}