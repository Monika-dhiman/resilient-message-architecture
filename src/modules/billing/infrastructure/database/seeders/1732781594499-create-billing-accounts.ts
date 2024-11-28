import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { StorageFileHandler } from 'src/infrastructure/storage/file-storage.service';
import { DriveConfigurationService } from 'src/infrastructure/storage/drive-config';
import { BillingAccount } from 'src/modules/billing/domain/billing-accounts/billing-accounts.entity';

export default class BillingAccountSeeder implements Seeder {
  private storageFileHandler: StorageFileHandler;
  private configService: ConfigService;
  private billingAccountsSeedFilePath: string;
  private fileName: string = 'billing-accounts.json';
  constructor() {
    this.storageFileHandler = new StorageFileHandler(
      new ConfigService(),
      new DriveConfigurationService(),
    );
    this.configService = new ConfigService();
    this.billingAccountsSeedFilePath =
      this.configService.get<string>('SEED_FILES_PATH') + this.fileName;
  }
  async run(dataSource: DataSource): Promise<void> {
    const repository = dataSource.getRepository(BillingAccount);
    const billingAccounts = await this.storageFileHandler.getFile(
      this.billingAccountsSeedFilePath,
    );
    await repository.insert(billingAccounts);
  }
}
