import { OutboxMessage } from './../../../domain/outbox-message/outbox-message.entity';
import { Injectable } from '@nestjs/common';
import { DataSource, EntityManager, Repository } from 'typeorm';
import { Event } from '../../../domain/common/event';
import { OutBoxStatus } from '../../../domain/outbox-message/enums/status.enum';

type OutboxMessagePayloadType = {
  message_id: string;
  type: string;
  properties: any;
  headers: any;
  body: any;
};

@Injectable()
export class OutboxMessageRepository extends Repository<OutboxMessage> {
  constructor(dataSource: DataSource) {
    super(OutboxMessage, dataSource.createEntityManager());
  }
  createOutboxPayloadFromEvent = (
    outbox_message: Event,
  ): OutboxMessagePayloadType => {
    return {
      message_id: outbox_message.getId(),
      type: outbox_message.getType(),
      properties: outbox_message.getProperties(),
      headers: outbox_message.getHeaders(),
      body: outbox_message.getPayload(),
    };
  };

  async storeOutboxMessage(
    outbox_message: Event,
    transactionalEntityManager: EntityManager,
  ) {
    return await transactionalEntityManager.save(
      OutboxMessage,
      this.createOutboxPayloadFromEvent(outbox_message),
    );
  }

  async getUnsentMessages(limit: number) {
    const [data, total] = await this.findAndCount({
      where: { status: OutBoxStatus.PENDING },
      take: limit,
    });
    return { data, total };
  }
}
