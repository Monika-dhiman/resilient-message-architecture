import { Module } from '@nestjs/common';
import { CreateShippingOrderController } from './create-shipping-orders.controller';
import { CreateShippingOrderHandler } from './create-shipping-orders.service';
import { ShippingOrderRepository } from 'src/modules/shipping/infrastructure/repositories/shipping-orders/shipping-orders.repository';

@Module({
  controllers: [CreateShippingOrderController],
  providers: [CreateShippingOrderHandler, ShippingOrderRepository],
})
export class CreateShippingOrderModule {}
