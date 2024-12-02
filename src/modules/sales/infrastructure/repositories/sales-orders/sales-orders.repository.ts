import { Injectable } from '@nestjs/common';
import { SalesOrder } from 'src/modules/sales/domain/sales-orders/sales-orders.entity';
import { DataSource, DeepPartial, Repository } from 'typeorm';

@Injectable()
export class SalesOrderRepository extends Repository<SalesOrder> {
  constructor(dataSource: DataSource) {
    super(SalesOrder, dataSource.createEntityManager());
  }

  async createOrder(payload: DeepPartial<SalesOrder>): Promise<SalesOrder> {
    return await this.save(payload);
  }

  async listSalesOrders(
    page?: number,
    limit?: number,
  ): Promise<SalesOrder[]> {
    const query = {
      skip: page > 0 ? (page -1) * limit : 0,
      take: limit,
    };
    return this.find(query);
  }
}
