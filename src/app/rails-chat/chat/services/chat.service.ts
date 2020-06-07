import { Injectable } from '@angular/core';
import { ActionCableService, Channel } from 'angular2-actioncable';
import { Subscription, Observable, of } from 'rxjs';
import { AngularTokenService } from 'angular-token';
import { UserService } from 'src/app/shared/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  channel:Channel;
  subscription: Subscription;
  oldMessages;
  cable: any;

  constructor(private cableService: ActionCableService,
              private tokenService: AngularTokenService,
              private userService: UserService) { }

  async openChannel(user, contractor) {
    var authData = this.tokenService.currentAuthData;

    console.log(authData)

    this.cable = await this.cableService
    .cable(`ws://localhost:3000/cable?access-token=${authData.accessToken}&uid=${authData.uid}&client=${authData.client}`);

    this.channel= await this.cable.channel('RoomChannel', {user_id: user.id, contractor_id: contractor.id});

    console.log(this.channel)

    return this.channel
  }

  sendMessage(message) {
    console.log("message in service");
    this.channel.perform('speak', {message: message})
  }

  unsubscribe() {
    this.channel.unsubscribe();
    this.cable.disconnect();
  }
}
