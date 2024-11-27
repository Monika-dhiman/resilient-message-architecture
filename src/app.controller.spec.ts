import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppHandler } from './app.handler';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppHandler],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Resilient Messaging Architecture"', () => {
      expect(appController.getApplicationInfo()).toBe('Resilient Messaging Architecture');
    });
  });
});
