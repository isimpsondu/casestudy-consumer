import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductConsumerController } from './controllers/product-consumer.controller';
import { DataServicesModule } from './services/data-services/data-services.module';
import { ProductServicesModule } from './services/use-cases/product/product-services.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClientsModule.register([
      {
        name: 'PRODUCT_CONSUMER',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'product',
            brokers: [process.env.KAFKA_CONNECTION_STRING as string],
          },
          consumer: {
            groupId: 'product_consumer',
          },
        },
      },
    ]),
    DataServicesModule,
    ProductServicesModule,
  ],
  controllers: [ProductConsumerController],
  providers: [],
})
export class AppModule {}
