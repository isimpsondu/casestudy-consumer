import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services/data-services.module';
import { ProductFactoryService } from './product-factory.service';
import { ProductServices } from './product-services.service';

@Module({
  imports: [DataServicesModule],
  providers: [ProductFactoryService, ProductServices],
  exports: [ProductFactoryService, ProductServices],
})
export class ProductServicesModule {}
