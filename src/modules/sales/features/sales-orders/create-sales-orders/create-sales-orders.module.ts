import { Module } from '@nestjs/common';
import { CreateSalesOrderHandler } from './create-sales-orders.service';
import { CreateSalesOrderController } from './create-sales-order.controller';
import { SalesOrderRepository } from 'src/modules/sales/infrastructure/repositories/sales-orders/sales-orders.repository';
import { SalesProductRepository } from 'src/modules/sales/infrastructure/repositories/sales-products/sales-products.repository';
import { OutboxMessageRepository } from 'src/infrastructure/repositories/outbox-message/outbox-message.repository';

@Module({
  controllers: [CreateSalesOrderController],
  providers: [CreateSalesOrderHandler, SalesOrderRepository, SalesProductRepository, OutboxMessageRepository],
})
export class CreateSalesOrderModule {}
