import { Controller } from '@nestjs/common';
import { 
  Ctx,
  KafkaContext,
  MessagePattern
 } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor() {}

  @MessagePattern('kafka.test')
  readMessage(@Ctx() context: KafkaContext) {
    const originalMessage = context.getMessage();
    const response =
      `Receiving a new message from topic: kafka.test: ` +
      JSON.stringify(originalMessage.value);
    console.log(response);
    return response;
  }
}
