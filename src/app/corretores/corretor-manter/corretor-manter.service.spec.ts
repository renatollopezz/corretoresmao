import { TestBed, inject } from '@angular/core/testing';

import { CorretorManterService } from './corretor-manter.service';

describe('CorretorManterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CorretorManterService]
    });
  });

  it('should be created', inject([CorretorManterService], (service: CorretorManterService) => {
    expect(service).toBeTruthy();
  }));
});
