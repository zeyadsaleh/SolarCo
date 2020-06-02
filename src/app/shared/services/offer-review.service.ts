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

  private apiRev:String = `${this.api.host}/offer_reviews`;
       
  // REVIEW API
  // GET ALL
  getReviews(contractor_id):Observable<any> {
    return this.http.get(`${this.apiRev}/per_contractor/${contractor_id}`);
  }
  // GET ONE
  getReview(contractor_id):Observable<any> {
    return this.http.get(`${this.apiRev}/${contractor_id}`);
  }
  // POST
  setReview(review):Observable<any> {
    return this.http.post(`${this.apiRev}`,review);
  }
  // PUT
  updateReview(id,review):Observable<any> {
    return this.http.put(`${this.apiRev}/${id}`,review);
  }

  // RATE API
  private apiRat:String = `${this.api.host}/offer_rates`;
  // GET ALL
  getRates(contractor_id):Observable<any> {
    return this.http.get(`${this.apiRat}/per_contractor/${contractor_id}`);
  }
  // GET ONE
  getRate(contractor_id):Observable<any> {
    return this.http.get(`${this.apiRat}/${contractor_id}`);
  }
  // POST
  setRate(rate):Observable<any> {
    return this.http.post(`${this.apiRat}`,rate);
  }
  // PUT
  updateRate(id,rate):Observable<any> {
    return this.http.put(`${this.apiRat}/${id}`,rate);
  }

}
