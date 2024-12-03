import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateShippingOrderHandler } from './create-shipping-orders.service';
import { CreateShippingOrderDto } from './create-shipping-orders.dto';

@Controller('api/v1/shipping')
export class CreateShippingOrderController {
  constructor(private readonly handler: CreateShippingOrderHandler) {}

  @Post('orders')
  public async handle(
    @Body() payload: CreateShippingOrderDto,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const order = await this.handler.handle(payload);
      if (!order) {
        return res.status(HttpStatus.NOT_FOUND).send();
      }
      return res.status(HttpStatus.CREATED).send('Shipping order created');
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).send();
    }
  }
}
