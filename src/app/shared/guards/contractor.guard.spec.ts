import { TestBed } from '@angular/core/testing';

import { ContractorGuard } from './contractor.guard';

describe('ContractorGuard', () => {
  let guard: ContractorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ContractorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
