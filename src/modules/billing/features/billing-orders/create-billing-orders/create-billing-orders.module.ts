import { Module } from '@nestjs/common';
import { CreateBillingOrderController } from './create-sales-order.controller';
import { CreateBillingOrderHandler } from './create-sales-orders.service';
import { BillingOrderRepository } from 'src/modules/billing/infrastructure/repositories/billing-orders/billing-orders.repository';

@Module({
  controllers: [CreateBillingOrderController],
  providers: [CreateBillingOrderHandler, BillingOrderRepository],
})
export class CreateBillingOrderModule {}
