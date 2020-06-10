import { Injectable } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from 'src/app/shared/services/global.service';
import { of } from 'rxjs';
import { map, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts = [];
  apiUrl = `${this.globalService.host}/chatrooms`;

  constructor(readonly userService: UserService,
              private http: HttpClient,
              private globalService: GlobalService) { }

  getUserContacts() {
    return this.http.get(`${this.apiUrl}/clients/${this.userService.current_user.id}`).pipe(
      map(response => [].slice.call(response)), // Convert object to array
      map(chatrooms => 
        chatrooms.map(chatroom => chatroom.contractor) // Return only contractors
      ))
  }

  getContractorContacts() {
    return this.http.get(`${this.apiUrl}/contractors/${this.userService.current_user.id}`).pipe(
      map(response => [].slice.call(response)), // Convert object to array
      map(chatrooms => 
        chatrooms.map(chatroom => chatroom.user) // Return only users
      ))
  }
}
