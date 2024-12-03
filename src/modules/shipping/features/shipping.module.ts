import { Module } from '@nestjs/common';
import { ShippingOrderModule } from './shipping-order/shipping-order.module';
import { ShippingProductModule } from './shipping-products/shipping-products.module';

@Module({
  imports: [ShippingOrderModule, ShippingProductModule],
})
export class ShippingModule {}
