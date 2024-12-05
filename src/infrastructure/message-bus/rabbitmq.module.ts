import { SignatureTypesModule } from './../processors/signature-types.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OutboxMessageRepository } from 'src/infrastructure/repositories/outbox-message/outbox-message.repository';
import { TypeOrmModule } from 'src/infrastructure/database/type-orm';
import { OutboxMessageRelay } from './outbox-message-relay.service';
import { ProducerService } from './rabbitmq/workers/producer.service';
import { RabbitmqConfigService } from './rabbitmq/config/rabbitmq-config.service';
import { InboxMessageRepository } from 'src/infrastructure/repositories/inbox-message/inbox-message.repository';
import { InboxMessageHandler } from './inbox-message-handler.service';
import { SignatureTypes } from 'src/infrastructure/processors/signature-types.service';
import { ConsumerService } from './rabbitmq/workers/consumer.service';
import { DispatchMessages } from './cli-commands/dispatch-messages';
import { HandleMessages } from './cli-commands/handle-messages';
import { RabbitmqConfigurerService } from './rabbitmq/config/rabbitmq-configurer.service';
import { RabbitmqConnectionService } from './rabbitmq/config/rabbitmq-connection.service';
import { HelloWorldModule } from 'src/feature/hello-world/hello-world.module';
import { HelloWorldHandler } from '../processors/handle-hello-world/handle-hello-world';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule,
    HelloWorldModule,
    SignatureTypesModule,
  ],
  providers: [
    DispatchMessages,
    RabbitmqConfigService,
    HandleMessages,
    RabbitmqConfigurerService,
    RabbitmqConnectionService,
    ProducerService,
    OutboxMessageRepository,
    OutboxMessageRelay,
    ConsumerService,
    InboxMessageHandler,
    SignatureTypes,
    InboxMessageRepository,
    HelloWorldHandler,
  ],
})
export class RabbitmqModule {}
