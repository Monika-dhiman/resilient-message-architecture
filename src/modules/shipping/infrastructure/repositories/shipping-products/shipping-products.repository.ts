import { Injectable } from '@nestjs/common';
import { ShippingProduct } from 'src/modules/shipping/domain/shipping-products/shipping-products.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ShippingProductRepository extends Repository<ShippingProduct> {
  constructor(dataSource: DataSource) {
    super(ShippingProduct, dataSource.createEntityManager());
  }

  async listShippingProducts(
    product_id?: string,
    page?: number,
    limit?: number,
  ): Promise<ShippingProduct[]> {
    const query = {
      where: { product_id: product_id },
      skip: page > 0 ? (page - 1) * limit : 0,
      take: limit,
    };
    return this.find(query);
  }
}
