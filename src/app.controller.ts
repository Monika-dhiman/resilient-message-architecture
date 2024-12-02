import { Controller, Get } from '@nestjs/common';
import { AppHandler } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly handler: AppHandler) {}

  @Get()
  getApplicationInfo(): string {
    return this.handler.handle();
  }
}
