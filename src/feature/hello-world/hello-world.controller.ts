import { Controller, Get } from '@nestjs/common';
import { HelloWorldHandler } from './hello-world.handler';

@Controller()
export class HelloWorldController {
  constructor(private readonly handler: HelloWorldHandler) {}

  @Get('hello-world')
  async handleMessages(): Promise<string> {
    return this.handler.handle();
  }
}
