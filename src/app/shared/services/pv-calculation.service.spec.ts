import { TestBed } from '@angular/core/testing';

import { PvCalculationService } from './pv-calculation.service';

describe('PvCalculationService', () => {
  let service: PvCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PvCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
