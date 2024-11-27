import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HelloWorldMessageEvent } from 'src/domain/hello-world/events/hello-world';
import { OutboxMessageRepository } from 'src/infrastructure/repositories/outbox-message/outbox-message.repository';
import { DataSource } from 'typeorm';

@Injectable()
export class HelloWorldHandler {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(OutboxMessageRepository)
    private readonly outboxMessageRepository: OutboxMessageRepository,
  ) {}
  async handle(): Promise<string> {
    await this.dataSource.transaction(async (transaction) => {
      await this.outboxMessageRepository.storeOutboxMessage(
        new HelloWorldMessageEvent({message: 'message payload'}),
        transaction,
      );
    });
    return 'hello world!!!';
  }
}
