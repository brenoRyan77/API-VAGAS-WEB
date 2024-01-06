import { TestBed } from '@angular/core/testing';

import { VagaServiceService } from './vaga-service.service';

describe('VagaServiceService', () => {
  let service: VagaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VagaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
