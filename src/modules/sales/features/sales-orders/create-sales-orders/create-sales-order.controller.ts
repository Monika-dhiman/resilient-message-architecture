import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateOrderDto } from './create-sales-orders.dto';
import { CreateSalesOrderHandler } from './create-sales-orders.service';

@Controller('api/v1/sales')
export class CreateSalesOrderController {
  constructor(private readonly handler: CreateSalesOrderHandler) {}

  @Post('orders')
  public async handle(@Body() payload: CreateOrderDto, @Res() res: Response): Promise<any> {
    const order = await this.handler.handle(payload);
    return res.status(HttpStatus.OK).send();
  }
}
