import { Injectable } from '@nestjs/common';
import { SalesProduct } from 'src/modules/sales/domain/sales-products/sales-products.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class SalesProductRepository extends Repository<SalesProduct> {
  constructor(dataSource: DataSource) {
    super(SalesProduct, dataSource.createEntityManager());
  }

  async listSalesProducts(
    product_id?: string,
    page?: number,
    limit?: number,
  ): Promise<SalesProduct[]> {
    const query = {
      where: { product_id: product_id },
      skip: page > 0 ? (page - 1) * limit : 0,
      take: limit,
    };
    return this.find(query);
  }
}
