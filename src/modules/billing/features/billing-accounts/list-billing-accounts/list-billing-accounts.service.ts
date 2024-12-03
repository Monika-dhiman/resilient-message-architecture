import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BillingAccount } from 'src/modules/billing/domain/billing-accounts/billing-accounts.entity';
import { BillingAccountRepository } from 'src/modules/billing/infrastructure/repositories/billing-accounts/billing-accounts.repository';

@Injectable()
export class ListBillingAccountsHandler {
  constructor(
    @InjectRepository(BillingAccountRepository)
    private readonly repository: BillingAccountRepository,
  ) {}
  async handle(query): Promise<BillingAccount[]> {
    return this.repository.listBillingAccounts(
      query?.page || 1,
      query?.limit || 10,
    );
  }
}
