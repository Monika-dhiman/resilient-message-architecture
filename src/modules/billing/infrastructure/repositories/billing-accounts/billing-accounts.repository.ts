import { Injectable } from '@nestjs/common';
import { BillingAccount } from 'src/modules/billing/domain/billing-accounts/billing-accounts.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class BillingAccountRepository extends Repository<BillingAccount> {
  constructor(dataSource: DataSource) {
    super(BillingAccount, dataSource.createEntityManager());
  }

  async listBillingAccounts(
    page?: number,
    limit?: number,
  ): Promise<BillingAccount[]> {
    const query = {
      skip: page > 0 ? (page - 1) * limit : 0,
      take: limit,
    };
    return this.find(query);
  }
}
