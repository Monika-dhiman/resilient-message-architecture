import { Module } from '@nestjs/common';
import { ListBillingAccountModule } from './list-billing-accounts/list-billing-accounts.module';

@Module({
  imports: [ListBillingAccountModule],
})
export class BillingAccountModule {}
