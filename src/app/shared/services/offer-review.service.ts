import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OfferReviewService {
  private reviewURl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // REVIEW API
  // GET ALL
  getReviews():Observable<any> {
    return this.http.get(`${this.reviewURl}/reviews`);
  }
  // GET ONE
  getReview(id):Observable<any> {
    return this.http.get(`${this.reviewURl}/reviews/${id}`);
  }
  // POST
  setReview(review):Observable<any> {
    return this.http.post(`${this.reviewURl}/reviews`,review);
  }
  // PUT
  updateReview(id,review):Observable<any> {
    return this.http.put(`${this.reviewURl}/reviews/${id}`,review);
  }

  // RATE API
  // GET ALL
  getRates():Observable<any> {
    return this.http.get(`${this.reviewURl}/rates`);
  }
  // GET ONE
  getRate(id):Observable<any> {
    return this.http.get(`${this.reviewURl}/rates/${id}`);
  }
  // POST
  setRate(rate):Observable<any> {
    return this.http.post(`${this.reviewURl}/rates`,rate);
  }
  // PUT
  updateRate(id,rate):Observable<any> {
    return this.http.put(`${this.reviewURl}/rates/${id}`,rate);
  }

}
