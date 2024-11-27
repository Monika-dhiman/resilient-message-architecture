import { Module } from '@nestjs/common';
import { HelloWorldController } from './hello-world.controller';
import { HelloWorldHandler } from './hello-world.handler';
import { HelloWorldMessageEvent } from '../../domain/hello-world/events/hello-world';
import { OutboxMessageRepository } from '../../infrastructure/repositories/outbox-message/outbox-message.repository';

@Module({
  controllers: [HelloWorldController],
  providers: [HelloWorldHandler, HelloWorldMessageEvent, OutboxMessageRepository],
})
export class HelloWorldModule {}
