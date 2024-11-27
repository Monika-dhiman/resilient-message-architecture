import { Injectable } from '@nestjs/common';
import { HelloWorldHandler } from './handle-hello-world/handle-hello-world';

@Injectable()
export class SignatureTypes {
  constructor(
    private readonly helloWorldHandler: HelloWorldHandler,
  ) {}
  public signatureTypes: Record<string, any[]> = {
    'hello-world-event': [this.helloWorldHandler],
  };

  public getSignatureTypes(): Record<string, any[]> {
    return this.signatureTypes;
  }
}
