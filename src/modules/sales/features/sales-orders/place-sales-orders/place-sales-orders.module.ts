import { Module } from '@nestjs/common';
import { PlaceSalesOrderHandler } from './place-sales-orders.service';
import { PlaceSalesOrderController } from './place-sales-orders.controller';
import { SalesOrderRepository } from 'src/modules/sales/infrastructure/repositories/sales-orders/sales-orders.repository';

@Module({
  controllers: [PlaceSalesOrderController],
  providers: [PlaceSalesOrderHandler, SalesOrderRepository],
})
export class PlaceSalesOrderModule {}
