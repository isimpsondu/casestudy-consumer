import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  /* Launch API for quering database
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  */
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:29092'],
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
