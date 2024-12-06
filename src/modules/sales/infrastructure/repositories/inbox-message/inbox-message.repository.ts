import { Injectable } from '@nestjs/common';
import { InboxMessagePayload } from 'src/infrastructure/message-bus/rabbitmq/rabbitmq.interface';
import { SalesInboxMessage } from 'src/modules/sales/domain/inbox-message/inbox-message.entity';
import { DataSource, EntityManager, Repository } from 'typeorm';

@Injectable()
export class InboxMessageRepository extends Repository<SalesInboxMessage> {
  constructor(dataSource: DataSource) {
    super(SalesInboxMessage, dataSource.createEntityManager());
  }

  async storeInboxMessage(
    payload: InboxMessagePayload,
    transaction: EntityManager = null,
  ) {
    if (transaction) {
      return await transaction.save(SalesInboxMessage, payload);
    }
    return await this.save(payload);
  }

  async getDuplicateInboxMessage(message_id: string, handler_name: string) {
    const criteria = { message_id, handler_name };
    return await this.findOne({ where: criteria });
  }
}
