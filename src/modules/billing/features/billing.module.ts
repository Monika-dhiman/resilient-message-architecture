import { Module } from '@nestjs/common';
import { BillingAccountModule } from './billing-accounts/billing-accounts.module';
import { BillingOrderModule } from './billing-orders/billing-orders.module';

@Module({
  imports: [BillingAccountModule, BillingOrderModule],
})
export class BillingModule {}
