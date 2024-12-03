import { Module } from '@nestjs/common';
import { CreateBillingOrderModule } from './create-billing-orders/create-billing-orders.module';

@Module({
  imports: [CreateBillingOrderModule],
})
export class BillingOrderModule {}