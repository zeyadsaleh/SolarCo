import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http: HttpClient,
              private api: GlobalService) { }
    
  private offerUrl = `${this.api.host}/offers`;
    
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
