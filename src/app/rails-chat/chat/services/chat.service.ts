import { Injectable } from '@angular/core';
import { ActionCableService, Channel } from 'angular2-actioncable';
import { Subscription, Observable, of } from 'rxjs';
import { AngularTokenService } from 'angular-token';
import { UserService } from 'src/app/shared/services/user.service';
import { environment } from '../../../../environments/environment'

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
    var type = this.userService.user_type[0] + this.userService.user_type.slice(1).toLowerCase();
    console.log(type)

    this.cable = await this.cableService
    .cable(`${environment.apiUrl}/cable?access-token=${authData.accessToken}&uid=${authData.uid}&client=${authData.client}&type=${type}`);

    this.channel= await this.cable.channel('RoomChannel', {user_id: user.id, contractor_id: contractor.id});

    return this.channel
  }

  sendMessage(message) {
    this.channel.perform('speak', {message: message})
  }

  unsubscribe() {
    if(this.cable && this.channel) {
      this.channel.unsubscribe();
      this.cable.disconnect();
    }
  }
}
