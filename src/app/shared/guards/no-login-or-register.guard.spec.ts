import { TestBed } from '@angular/core/testing';

import { NoLoginOrRegisterGuard } from './no-login-or-register.guard';

describe('NoLoginOrRegisterGuard', () => {
  let guard: NoLoginOrRegisterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoLoginOrRegisterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
