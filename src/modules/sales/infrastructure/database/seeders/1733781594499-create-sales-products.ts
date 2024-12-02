import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { StorageFileHandler } from 'src/infrastructure/storage/file-storage.service';
import { DriveConfigurationService } from 'src/infrastructure/storage/drive-config';
import { SalesProducts } from 'src/modules/sales/domain/sales-products/sales-products.entity';

export default class SalesProductsSeeder implements Seeder {
  private storageFileHandler: StorageFileHandler;
  private configService: ConfigService;
  private salesProductsSeedFilePath: string;
  private fileName: string = 'sales-products.json';
  constructor() {
    this.storageFileHandler = new StorageFileHandler(
      new ConfigService(),
      new DriveConfigurationService(),
    );
    this.configService = new ConfigService();
    this.salesProductsSeedFilePath =
      this.configService.get<string>('SEED_FILES_PATH') + this.fileName;
  }
  async run(dataSource: DataSource): Promise<void> {
    const repository = dataSource.getRepository(SalesProducts);
    const salesProducts = await this.storageFileHandler.getFile(
      this.salesProductsSeedFilePath,
    );
    await repository.insert(salesProducts);
  }
}
