import { Injectable } from '@nestjs/common';
import { BillingOrder } from 'src/modules/billing/domain/billing-orders/billing-orders.entity';
import { DataSource, DeepPartial, Repository } from 'typeorm';

@Injectable()
export class BillingOrderRepository extends Repository<BillingOrder> {
  constructor(dataSource: DataSource) {
    super(BillingOrder, dataSource.createEntityManager());
  }

  async createOrder(payload: DeepPartial<BillingOrder>): Promise<BillingOrder> {
    return await this.save(payload);
  }
}
