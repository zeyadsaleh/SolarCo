import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';
@Injectable({
  providedIn: 'root'
})
export class OfferReviewService {

  constructor(private http: HttpClient,
    private api: GlobalService) { }

  private apiRev: String = `${this.api.host}/offer_reviews`;

  // REVIEW API
  // GET ALL
  getReviews(contractor_id): Observable<any> {
    return this.http.get(`${this.apiRev}/per_contractor/${contractor_id}`);
  }
  // GET ONE
  getReview(offer_id): Observable<any> {
    return this.http.get(`${this.apiRev}/${offer_id}`);
  }
  // POST
  setReview(review): Observable<any> {
    return this.http.post(`${this.apiRev}`, review);
  }
  // PUT
  updateReview(offer_id, review): Observable<any> {
    return this.http.put(`${this.apiRev}/${offer_id}`, review);
  }

  // RATE API
  private apiRat: String = `${this.api.host}/offer_rates`;
  // GET ALL
  getRates(contractor_id): Observable<any> {
    return this.http.get(`${this.apiRat}/per_contractor/${contractor_id}`);
  }
  // GET ONE
  getRate(offer_id): Observable<any> {
    return this.http.get(`${this.apiRat}/${offer_id}`);
  }
  // POST
  setRate(rate): Observable<any> {
    return this.http.post(`${this.apiRat}`, rate);
  }
  // PUT
  updateRate(offer_id, rate): Observable<any> {
    return this.http.put(`${this.apiRat}/${offer_id}`, rate);
  }

}
