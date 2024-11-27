import { Module } from '@nestjs/common';
import { SignatureTypes } from './signature-types.service';
import { HelloWorldConsumerHandlerModule } from './handle-hello-world/handle-hello-world.module';

@Module({
  imports: [
    HelloWorldConsumerHandlerModule,
  ],
  providers: [SignatureTypes],
  exports: [SignatureTypes],
})
export class SignatureTypesModule {}
