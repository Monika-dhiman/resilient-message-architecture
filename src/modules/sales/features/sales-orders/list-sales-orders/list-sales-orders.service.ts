import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SalesOrder } from 'src/modules/sales/domain/sales-orders/sales-orders.entity';
import { SalesOrderRepository } from 'src/modules/sales/infrastructure/repositories/sales-orders/sales-orders.repository';

@Injectable()
export class ListSalesOrdersHandler {
  constructor(
    @InjectRepository(SalesOrderRepository)
    private readonly repository: SalesOrderRepository,
  ) {}
  async handle(query): Promise<SalesOrder[]> {
    return this.repository.listSalesOrders(
      query?.page || 1,
      query?.limit || 10,
    );
  }
}
