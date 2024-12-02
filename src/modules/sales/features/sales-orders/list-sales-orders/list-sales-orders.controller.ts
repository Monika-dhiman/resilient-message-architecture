import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ListSalesOrdersHandler } from './list-sales-orders.service';

@Controller('api/v1/sales')
export class ListSalesOrdersController {
  constructor(private readonly handler: ListSalesOrdersHandler) {}

  @Get('orders')
  public async handle(@Query() query, @Res() res: Response): Promise<any> {
    const orders = await this.handler.handle(query);
    return res.status(HttpStatus.OK).json(orders);
  }
}
