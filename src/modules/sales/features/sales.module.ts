import { Module } from '@nestjs/common';
import { ListSalesProductsModule } from './sales-products/list-sales-products/list-sales-products.module';
import { CreateSalesOrderModule } from './sales-orders/create-sales-orders/create-sales-orders.module';
import { ListSalesOrderModule } from './sales-orders/list-sales-orders/list-sales-orders.module';

@Module({
  imports: [ListSalesProductsModule, CreateSalesOrderModule, ListSalesOrderModule],
})
export class SalesModule {}
