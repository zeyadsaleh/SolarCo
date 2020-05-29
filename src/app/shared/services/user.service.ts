import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl:String = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // getClient(id) {
  //   return this.http.get(`${this.apiUrl}/clients/${id}`).pipe(
  //     map(data => {
  //       // Create avatar_url used in image tags
  //       data['avatar_url'] ? data['avatar_url'] = this.apiUrl + data['avatar_url'] : data['avatar_url'] = '';
        
  //       return data;
  //     })
  //   );
  // }

  updateAvatar(id, body, headers) {
    return this.http.put(`${this.apiUrl}/clients/avatar/${id}`, body, {headers: headers});
  }

  updateContractor(id, body) {
    return this.http.put(`${this.apiUrl}/contractors/${id}`, body);
  }
}
