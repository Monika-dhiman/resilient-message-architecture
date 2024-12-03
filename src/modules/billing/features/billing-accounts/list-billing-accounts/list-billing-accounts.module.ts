import { Module } from '@nestjs/common';
import { ListBillingAccountsHandler } from './list-billing-accounts.service';
import { ListBillingAccountsController } from './list-billing-accounts.controller';
import { BillingAccountRepository } from 'src/modules/billing/infrastructure/repositories/billing-accounts/billing-accounts.repository';

@Module({
  controllers: [ListBillingAccountsController],
  providers: [ListBillingAccountsHandler, BillingAccountRepository],
})
export class ListBillingAccountModule {}
