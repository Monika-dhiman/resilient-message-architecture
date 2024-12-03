import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateBillingOrderHandler } from './create-sales-orders.service';
import { BillingOrderDto } from './create-billing-orders.dto';

@Controller('api/v1/billing')
export class CreateBillingOrderController {
  constructor(private readonly handler: CreateBillingOrderHandler) {}

  @Post('orders')
  public async handle(
    @Body() payload: BillingOrderDto,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const order = await this.handler.handle(payload);
      if (!order) {
        return res.status(HttpStatus.NOT_FOUND).send();
      }
      return res.status(HttpStatus.OK).send(order);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).send();
    }
  }
}
