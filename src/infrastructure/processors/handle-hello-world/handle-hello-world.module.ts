import { Module } from '@nestjs/common';
import { InboxMessageRepository } from 'src/infrastructure/repositories/inbox-message/inbox-message.repository';
import { HelloWorldHandler } from './handle-hello-world';

@Module({
  providers: [
    HelloWorldHandler,
    InboxMessageRepository,
  ],
  exports: [HelloWorldHandler],
})
export class HelloWorldConsumerHandlerModule {}
