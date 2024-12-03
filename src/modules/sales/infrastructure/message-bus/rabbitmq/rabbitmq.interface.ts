import * as amqp from 'amqplib';
export interface ConfigType {
  username: string;
  password: string;
  appName: string;
  fanoutExchange: string;
  heartbeatInterval: number;
  dsn: string;
  directExchange: string;
  primaryQueue: string;
  retryQueue: string;
  retryBindingKey: string;
  errorBindingKey: string;
  delayedRetriesNumber: number;
  immediateRetriesNumber: number;
  retryQueueMessageTtl: number;
  consumeMessageLimit: number;
  dispatchMessageLimit: number;
}

export interface RabbitMQPublishMessage {
  exchange: string;
  bindingKey: string;
  content: string;
  properties: amqp.Options.Publish;
}

export interface QueueConfig {
  durable: boolean;
  deadLetterExchange?: string;
  messageTtl?: number;
}

export interface InboxMessagePayload {
  message_id: string;
  handler_name: string;
}
