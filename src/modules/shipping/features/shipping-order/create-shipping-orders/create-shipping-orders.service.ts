import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShippingOrderRepository } from 'src/modules/shipping/infrastructure/repositories/shipping-orders/shipping-orders.repository';
import { CreateShippingOrderDto } from './create-shipping-orders.dto';
import { ShippingOrder } from 'src/modules/shipping/domain/shipping-orders/shipping-orders.entity';

@Injectable()
export class CreateShippingOrderHandler {
  constructor(
    @InjectRepository(ShippingOrderRepository)
    private readonly repository: ShippingOrderRepository,
  ) {}
  async handle(payload: CreateShippingOrderDto): Promise<ShippingOrder> {
    return this.repository.createOrder(payload);
  }
}
