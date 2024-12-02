import { Injectable } from '@nestjs/common';

@Injectable()
export class AppHandler {
  handle(): string {
    return 'Resilient Messaging Architecture';
  }
}
