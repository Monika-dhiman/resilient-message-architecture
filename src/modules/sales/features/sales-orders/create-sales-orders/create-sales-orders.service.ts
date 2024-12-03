import { OutboxMessageRepository } from 'src/infrastructure/repositories/outbox-message/outbox-message.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SalesOrderRepository } from 'src/modules/sales/infrastructure/repositories/sales-orders/sales-orders.repository';
import { CreateOrderDto } from './create-sales-orders.dto';
import { SalesProductRepository } from 'src/modules/sales/infrastructure/repositories/sales-products/sales-products.repository';
import { SalesOrderPlacedEvent } from 'src/modules/sales/domain/sales-orders/events/sales-orders.events';
import { DataSource } from 'typeorm';

@Injectable()
export class CreateSalesOrderHandler {
  constructor(
    @InjectRepository(SalesOrderRepository)
    private readonly saleOrderRepository: SalesOrderRepository,
    @InjectRepository(OutboxMessageRepository)
    private readonly outboxMessageRepository: OutboxMessageRepository,
    private readonly salesProductRepository: SalesProductRepository,
    private dataSource: DataSource,
  ) {}
  async handle(payload: CreateOrderDto) {
    const salesProducts = await this.salesProductRepository.listSalesProducts();

    let totalAmount = 0;

    payload.product_ids.forEach((product) => {
      const salesProduct = salesProducts.find(
        (sp) => sp.product_id === product.id,
      );
      if (salesProduct) {
        totalAmount +=
          parseFloat(salesProduct.price.toString()) * product.quantity;
      }
    });

    return await this.dataSource.transaction(async (transaction) => {
      const order = await this.saleOrderRepository.createOrder(
        {
          ...payload,
          total_amount: totalAmount,
        },
        transaction,
      );

      await this.outboxMessageRepository.storeOutboxMessage(
        new SalesOrderPlacedEvent(order),
        transaction,
      );
    });
  }
}
