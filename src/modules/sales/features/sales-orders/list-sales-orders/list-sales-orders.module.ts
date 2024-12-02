import { Module } from '@nestjs/common';
import { ListSalesOrdersHandler } from './list-sales-orders.service';
import { SalesOrderRepository } from 'src/modules/sales/infrastructure/repositories/sales-orders/sales-orders.repository';
import { ListSalesOrdersController } from './list-sales-orders.controller';

@Module({
  controllers: [ListSalesOrdersController],
  providers: [ListSalesOrdersHandler, SalesOrderRepository],
})
export class ListSalesOrderModule {}
