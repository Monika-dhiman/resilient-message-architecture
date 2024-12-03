import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SalesOrderRepository } from 'src/modules/sales/infrastructure/repositories/sales-orders/sales-orders.repository';
import { CreateOrderDto } from './create-sales-orders.dto';

@Injectable()
export class PlaceSalesOrderHandler {
  constructor(
    @InjectRepository(SalesOrderRepository)
    private readonly repository: SalesOrderRepository,
  ) {}
  async handle(id: string): Promise<Boolean> {
    try {
      if (!id) {
        throw new Error('Id is required');
      }
      const order = await this.repository.updateSalesOrder(id);
      if (order === 0) {
        throw new Error('Order not found');
      }
      return true;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
