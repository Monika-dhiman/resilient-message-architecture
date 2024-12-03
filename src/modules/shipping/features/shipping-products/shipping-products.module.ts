import { Module } from '@nestjs/common';
import { ListShippingProductsModule } from './list-shipping-products/list-shipping-products.module';

@Module({
  imports: [ListShippingProductsModule],
})
export class ShippingProductModule {}
