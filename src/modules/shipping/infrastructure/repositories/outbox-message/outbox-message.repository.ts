import { Injectable } from '@nestjs/common';
import { Event } from 'src/domain/common/event';
import { ShippingOutBoxStatus } from 'src/modules/shipping/domain/outbox-message/enums/status.enum';
import { ShippingOutboxMessage } from 'src/modules/shipping/domain/outbox-message/outbox-message.entity';
import { DataSource, EntityManager, Repository } from 'typeorm';
 
type OutboxMessagePayloadType = {
  message_id: string;
  type: string;
  properties: any;
  headers: any;
  body: any;
};

@Injectable()
export class OutboxMessageRepository extends Repository<ShippingOutboxMessage> {
  constructor(dataSource: DataSource) {
    super(ShippingOutboxMessage, dataSource.createEntityManager());
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
      ShippingOutboxMessage,
      this.createOutboxPayloadFromEvent(outbox_message),
    );
  }

  async getUnsentMessages(limit: number) {
    const [data, total] = await this.findAndCount({
      where: { status: ShippingOutBoxStatus.PENDING },
      take: limit,
    });
    return { data, total };
  }
}
