import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private offerUrl = 'http://localhost:3000/offers';


  constructor(private http: HttpClient) { }

   getOffers(post_id):Observable<any> {
    return this.http.get(this.offerUrl+'/post/'+post_id);
  }

  getAllOffers():Observable<any> {
    return this.http.get(this.offerUrl);
  }

  getOffer(id):Observable<any> {
    return this.http.get(this.offerUrl+'/'+id);
  }

  createOffer(offer):Observable<any> {
    return this.http.post(this.offerUrl,offer);
  }

  updateOffer(id,offer):Observable<any> {
    return this.http.put(this.offerUrl+'/'+id,offer);
  }

  deleteOffer(id):Observable<any> {
    return this.http.delete(this.offerUrl+'/'+id);
  }
}
