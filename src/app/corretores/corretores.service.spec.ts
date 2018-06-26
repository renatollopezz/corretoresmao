import { TestBed, inject } from '@angular/core/testing';

import { CorretoresService } from './corretores.service';

describe('CorretoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CorretoresService]
    });
  });

  it('should be created', inject([CorretoresService], (service: CorretoresService) => {
    expect(service).toBeTruthy();
  }));
});
