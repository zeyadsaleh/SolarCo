import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private postURl = `${this.api.host}/notifications`;

  constructor(private http: HttpClient,
              private api: GlobalService) { }


  getNotifications():Observable<any> {
    return this.http.get(this.postURl);
  }
}
