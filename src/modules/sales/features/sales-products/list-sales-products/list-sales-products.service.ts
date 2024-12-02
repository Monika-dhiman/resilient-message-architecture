import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SalesProduct } from 'src/modules/sales/domain/sales-products/sales-products.entity';
import { SalesProductRepository } from 'src/modules/sales/infrastructure/repositories/sales-products/sales-products.repository';

@Injectable()
export class ListSalesProductsHandler {
  constructor(
    @InjectRepository(SalesProductRepository)
    private readonly repository: SalesProductRepository,
  ) {}
  async handle(query): Promise<SalesProduct[]> {
    return this.repository.listSalesProducts(
      query?.product_id,
      query?.page || 1,
      query?.limit || 10,
    );
  }
}
