import { Module } from '@nestjs/common';
import { ListShippingProductsController } from './list-shipping-products.controller';
import { ListShippingProductsHandler } from './list-shipping-products.service';
import { ShippingProductRepository } from 'src/modules/shipping/infrastructure/repositories/shipping-products/shipping-products.repository';

@Module({
  controllers: [ListShippingProductsController],
  providers: [ListShippingProductsHandler, ShippingProductRepository],
})
export class ListShippingProductsModule {}
