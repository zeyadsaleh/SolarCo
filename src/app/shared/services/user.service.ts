import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
    private api: GlobalService) { }
    
  private apiUrl:String = `${this.api.host}`;;

  getContractor(id) {
    return this.http.get(`${this.apiUrl}/contractors/${id}`);
  }

  updateAvatar(id, type, body, headers) {
    if(type == 'USER')
      return this.http.put(`${this.apiUrl}/clients/avatar/${id}`, body, {headers: headers});
    else if (type == 'CONTRACTOR')
      return this.http.put(`${this.apiUrl}/contractors/avatar/${id}`, body, {headers: headers});
  }

  updateContractor(id, body) {
    return this.http.put(`${this.apiUrl}/contractors/${id}`, body);
  }

  updateClient(id, body) {
    return this.http.put(`${this.apiUrl}/clients/${id}`, body);
  }
}
