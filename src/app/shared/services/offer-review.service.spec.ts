import { TestBed } from '@angular/core/testing';

import { OfferReviewService } from './offer-review.service';

describe('OfferReviewService', () => {
  let service: OfferReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
