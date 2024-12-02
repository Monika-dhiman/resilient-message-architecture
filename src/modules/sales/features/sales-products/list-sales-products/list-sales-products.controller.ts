import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { ListSalesProductsHandler } from './list-sales-products.service';
import { Response } from 'express';

@Controller('api/v1/sales')
export class ListSalesProductsController {
  constructor(private readonly handler: ListSalesProductsHandler) {}

  @Get('products')
  public async handle(@Query() query, @Res() res: Response): Promise<any> {
    const products = await this.handler.handle(query);
    return res.status(HttpStatus.OK).json(products);
  }
}
