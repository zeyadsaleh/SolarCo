import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/shared/services/global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private api: GlobalService, private http: HttpClient) { }

  private messagesApi:String = `${this.api.host}/messages`;

  getOldMessages(user_id, contractor_id) {
    return this.http.get(`${this.messagesApi}/${user_id}/${contractor_id}`);
  }
}
