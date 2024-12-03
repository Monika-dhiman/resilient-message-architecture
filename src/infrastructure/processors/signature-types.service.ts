import { Injectable } from '@nestjs/common';
import { HelloWorldHandler } from './handle-hello-world/handle-hello-world';
import { LazyModuleLoader } from '@nestjs/core';
import { HelloWorldConsumerHandlerModule } from './handle-hello-world/handle-hello-world.module';

@Injectable()
export class SignatureTypes {
  constructor(private readonly lazyLoader: LazyModuleLoader) {}
  public signatureTypes: Record<string, any[]> = {
    'hello-world-event': [
      this.lazyLoader
        .load(() => HelloWorldConsumerHandlerModule)
        .then((module) => module.get(HelloWorldHandler)),
    ],
  };

  public getSignatureTypes(): Record<string, any[]> {
    return this.signatureTypes;
  }
}
