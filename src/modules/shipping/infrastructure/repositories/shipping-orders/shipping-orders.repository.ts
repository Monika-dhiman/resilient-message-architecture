import { Injectable } from '@nestjs/common';
import { ShippingOrder } from 'src/modules/shipping/domain/shipping-orders/shipping-orders.entity';
import { DataSource, DeepPartial, Repository } from 'typeorm';

@Injectable()
export class ShippingOrderRepository extends Repository<ShippingOrder> {
  constructor(dataSource: DataSource) {
    super(ShippingOrder, dataSource.createEntityManager());
  }

  async createOrder(
    payload: DeepPartial<ShippingOrder>,
  ): Promise<ShippingOrder> {
    return await this.save(payload);
  }
}
