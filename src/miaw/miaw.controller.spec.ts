import { Test, TestingModule } from '@nestjs/testing';
import { MiawController } from './miaw.controller';

describe('MiawController', () => {
  let controller: MiawController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MiawController],
    }).compile();

    controller = module.get<MiawController>(MiawController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
