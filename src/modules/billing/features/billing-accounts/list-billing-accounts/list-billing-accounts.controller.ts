import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ListBillingAccountsHandler } from './list-billing-accounts.service';

@Controller('api/v1/billing')
export class ListBillingAccountsController {
  constructor(private readonly handler: ListBillingAccountsHandler) {}

  @Get('accounts')
  public async handle(@Query() query, @Res() res: Response): Promise<any> {
    const accounts = await this.handler.handle(query);
    return res.status(HttpStatus.OK).json(accounts);
  }
}
