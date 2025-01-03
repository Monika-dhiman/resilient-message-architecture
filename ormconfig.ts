import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { ConfigService } from '@nestjs/config';
require('dotenv').config();

export const dataSourceOptions = (
  configService: ConfigService,
  domain: 'shipping' | 'sales' | 'product-catalog' | 'billing' | '**' = '**',
): DataSourceOptions & SeederOptions => ({
  type: 'postgres',
  host: configService.get<string>('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USER'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_DATABASE'),
  entities: [`dist/src/modules/${domain}/domain/**/*entity.js`,
    `dist/src/domain/**/*entity.js`
  ],
  synchronize: false,
  migrationsTableName: 'migrations',
  migrations: ['dist/src/**/**/infrastructure/database/migrations/*.js'],
  seeds: ['dist/src/**/**/infrastructure/database/seeders/*.js'],
  seedTracking: true,
});

export const dataSource = new DataSource(
  dataSourceOptions(new ConfigService()),
);
