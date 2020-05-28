import { TestBed } from '@angular/core/testing';

import { GeoLoactionService } from './geo-loaction.service';

describe('GeoLoactionService', () => {
  let service: GeoLoactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoLoactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
