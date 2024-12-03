import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ListShippingProductsHandler } from './list-shipping-products.service';

@Controller('api/v1/shipping')
export class ListShippingProductsController {
  constructor(private readonly handler: ListShippingProductsHandler) {}

  @Get('products')
  public async handle(@Query() query, @Res() res: Response): Promise<any> {
    const products = await this.handler.handle(query);
    return res.status(HttpStatus.OK).json(products);
  }
}
