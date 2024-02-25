import { Test, TestingModule } from '@nestjs/testing';
import { MiawService } from './miaw.service';

describe('MiawService', () => {
  let service: MiawService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MiawService],
    }).compile();

    service = module.get<MiawService>(MiawService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
