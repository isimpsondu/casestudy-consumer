import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { ProductController } from './controllers/product.controller';
import { ProductConsumerController } from './controllers/product-consumer.controller';
import { DataServicesModule } from './services/data-services/data-services.module';
import { ProductServicesModule } from './services/use-cases/product/product-services.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'any_name_i_want',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'any_client_id_i_want',
            brokers: ['localhost:29092'],
          },
          consumer: {
            groupId: 'an_unique_string_id',
          },
        },
      },
    ]),
    DataServicesModule,
    ProductServicesModule,
  ],
  controllers: [AppController, ProductController, ProductConsumerController],
  providers: [],
})
export class AppModule {}
