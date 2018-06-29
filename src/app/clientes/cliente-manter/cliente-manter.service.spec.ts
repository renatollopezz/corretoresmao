import { TestBed, inject } from '@angular/core/testing';

import { ClienteManterService } from './cliente-manter.service';

describe('ClienteManterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClienteManterService]
    });
  });

  it('should be created', inject([ClienteManterService], (service: ClienteManterService) => {
    expect(service).toBeTruthy();
  }));
});
