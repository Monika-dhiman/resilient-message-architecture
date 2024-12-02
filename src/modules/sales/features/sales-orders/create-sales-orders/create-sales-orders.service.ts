import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SalesOrder } from 'src/modules/sales/domain/sales-orders/sales-orders.entity';
import { SalesOrderRepository } from 'src/modules/sales/infrastructure/repositories/sales-orders/sales-orders.repository';
import { CreateOrderDto } from './create-sales-orders.dto';
import { SalesProductRepository } from 'src/modules/sales/infrastructure/repositories/sales-products/sales-products.repository';

@Injectable()
export class CreateSalesOrderHandler {
  constructor(
    @InjectRepository(SalesOrderRepository)
    private readonly saleOrderRepository: SalesOrderRepository,
    private readonly salesProductRepository: SalesProductRepository,
  ) {}
  async handle(payload: CreateOrderDto): Promise<SalesOrder> {
    const salesProducts = await this.salesProductRepository.listSalesProducts();

    let totalAmount = 0;

    payload.product_ids.forEach((product) => {
      const salesProduct = salesProducts.find(
        (sp) => sp.product_id === product.id,
      );
      if (salesProduct) {
        totalAmount +=
          parseFloat(salesProduct.price.toString()) * product.quantity;
      }
    });

    return this.saleOrderRepository.createOrder({
      ...payload,
      total_amount: totalAmount,
    });
  }
}
