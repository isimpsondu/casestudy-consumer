import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services/data-services.module';
import { ProductFactoryService } from './product-factory.service';
import { ProductService } from './product-services.service';

@Module({
  imports: [DataServicesModule],
  providers: [ProductFactoryService, ProductService],
  exports: [ProductFactoryService, ProductService],
})
export class ProductServicesModule {}
