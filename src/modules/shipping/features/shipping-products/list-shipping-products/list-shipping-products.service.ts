import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShippingProduct } from 'src/modules/shipping/domain/shipping-products/shipping-products.entity';
import { ShippingProductRepository } from 'src/modules/shipping/infrastructure/repositories/shipping-products/shipping-products.repository';

@Injectable()
export class ListShippingProductsHandler {
  constructor(
    @InjectRepository(ShippingProductRepository)
    private readonly repository: ShippingProductRepository,
  ) {}
  async handle(query): Promise<ShippingProduct[]> {
    return this.repository.listShippingProducts(
      query?.product_id,
      query?.page || 1,
      query?.limit || 10,
    );
  }
}
