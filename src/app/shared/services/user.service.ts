import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl:String = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  updateAvatar(id, body, headers) {
    return this.http.put(`${this.apiUrl}/clients/avatar/${id}`, body, {headers: headers});
  }

  updateContractor(id, body) {
    return this.http.put(`${this.apiUrl}/contractors/${id}`, body);
  }
}
