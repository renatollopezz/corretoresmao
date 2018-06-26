import { CorretoresModule } from './corretores.module';

describe('CorretoresModule', () => {
  let corretoresModule: CorretoresModule;

  beforeEach(() => {
    corretoresModule = new CorretoresModule();
  });

  it('should create an instance', () => {
    expect(corretoresModule).toBeTruthy();
  });
});
