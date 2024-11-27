import { HelloWorldModule } from './feature/hello-world/hello-world.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from './infrastructure/database/type-orm';
import { AppHandler } from './app.handler';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule,
    HelloWorldModule,
  ],
  controllers: [AppController],
  providers: [AppHandler],
})
export class AppModule {}
