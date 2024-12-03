import { Controller, HttpStatus, Param, Patch, Res } from '@nestjs/common';
import { Response } from 'express';
import { PlaceSalesOrderHandler } from './place-sales-orders.service';

@Controller('api/v1/sales/orders')
export class PlaceSalesOrderController {
  constructor(private readonly handler: PlaceSalesOrderHandler) {}

  @Patch(':id/place')
  public async handle(
    @Param('id') id: string,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const order = await this.handler.handle(id);
      if (!order) {
        return res.status(HttpStatus.NOT_FOUND).send();
      }
      return res.status(HttpStatus.OK).send('Order placed');
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).send();
    }
  }
}
