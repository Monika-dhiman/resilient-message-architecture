import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { InboxMessageRepository } from 'src/infrastructure/repositories/inbox-message/inbox-message.repository';
import { DataSource } from 'typeorm';
import { Message } from '../common/message.interface';
import { MessageBody } from './handle-hello-world.interface';

export class HelloWorldHandler {
  constructor(
    @InjectDataSource()
    private dataSource: DataSource,
    private inboxMessageRepository: InboxMessageRepository,
  ) {}

  getHandlerName(): string {
    return this.constructor.name;
  }

  async handleEvent(payload: Message<MessageBody>) {
    await this.dataSource.transaction(async (transaction) => {
      const {message} = payload.body || {};
      console.log("Event message recieved successfully: ", payload)
      console.log("Event message: ", message);
      await this.inboxMessageRepository.storeInboxMessage(
        {
          message_id: payload.messageId,
          handler_name: this.getHandlerName(),
        },
        transaction,
      );
    });
  }
}
