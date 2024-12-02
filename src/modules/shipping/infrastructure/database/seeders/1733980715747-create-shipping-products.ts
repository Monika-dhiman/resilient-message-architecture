import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { ConfigService } from '@nestjs/config';
import { StorageFileHandler } from 'src/infrastructure/storage/file-storage.service';
import { DriveConfigurationService } from 'src/infrastructure/storage/drive-config';
import { ShippingProduct } from 'src/modules/shipping/domain/shipping-products/shipping-products.entity';

export default class ShippingProductsSeeder implements Seeder {
  private storageFileHandler: StorageFileHandler;
  private configService: ConfigService;
  private shippingProductsSeedFilePath: string;
  private fileName: string = 'shipping-products.json';
  constructor() {
    this.storageFileHandler = new StorageFileHandler(
      new ConfigService(),
      new DriveConfigurationService(),
    );
    this.configService = new ConfigService();
    this.shippingProductsSeedFilePath =
      this.configService.get<string>('SEED_FILES_PATH') + this.fileName;
  }
  async run(dataSource: DataSource): Promise<void> {
    const repository = dataSource.getRepository(ShippingProduct);
    const shippingProducts = await this.storageFileHandler.getFile(
      this.shippingProductsSeedFilePath,
    );
    await repository.insert(shippingProducts);
  }
}
