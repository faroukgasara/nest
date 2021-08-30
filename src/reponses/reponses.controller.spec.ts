import { Test, TestingModule } from '@nestjs/testing';
import { ReponsesController } from './reponses.controller';
import { ReponsesService } from './reponses.service';

describe('ReponsesController', () => {
  let controller: ReponsesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReponsesController],
      providers: [ReponsesService],
    }).compile();

    controller = module.get<ReponsesController>(ReponsesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
