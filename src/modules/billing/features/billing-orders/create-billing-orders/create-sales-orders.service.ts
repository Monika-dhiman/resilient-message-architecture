import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BillingOrderRepository } from 'src/modules/billing/infrastructure/repositories/billing-orders/billing-orders.repository';
import { BillingOrderDto } from './create-billing-orders.dto';
import { BillingOrder } from 'src/modules/billing/domain/billing-orders/billing-orders.entity';

@Injectable()
export class CreateBillingOrderHandler {
  constructor(
    @InjectRepository(BillingOrderRepository)
    private readonly repository: BillingOrderRepository,
  ) {}
  async handle(payload: BillingOrderDto): Promise<BillingOrder> {
    return this.repository.createOrder(payload);
  }
}
