import { Module } from '@nestjs/common';
import { ListSalesProductsController } from './list-sales-products.controller';
import { ListSalesProductsHandler } from './list-sales-products.service';
import { SalesProductRepository } from 'src/modules/sales/infrastructure/repositories/sales-products/sales-products.repository';

@Module({
  controllers: [ListSalesProductsController],
  providers: [ListSalesProductsHandler, SalesProductRepository],
})
export class ListSalesProductsModule {}
