import { Injectable } from '@angular/core';
import { CometChat } from '@cometchat-pro/chat';
import { MatSnackBar } from '@angular/material/snack-bar';
import { COMETCHAT_CONSTANTS } from '../api/CHAT_CONSTS';

@Injectable({
  providedIn: 'root'
})
export class ChatAuthService {

  currentUser;

  constructor() {
    this.init(COMETCHAT_CONSTANTS.APP_ID);
  }

  init(appId: string) {
    const appSetting = new CometChat.AppSettingsBuilder().setRegion(COMETCHAT_CONSTANTS.REGION).subscribePresenceForAllUsers().build();
    CometChat.init(appId, appSetting).then(
      msg => console.log('Initialized succesfull: ', msg),
      err => {
        console.log('App init failed', err);
        // this.snackBar.open(
        //   'App initialization failed. Please refresh the page.'
        // );
      }
    );
  }

  login(userId: string) {
    return CometChat.login(userId, COMETCHAT_CONSTANTS.API_KEY)
      .then(usr => {
        this.currentUser = usr
        console.log(usr);
      }, (this.currentUser = null))
      .then(_ => console.log('User logged in'), console.error);
  }

  async signUp(uid: string, name:string) {
    var data = {uid, name};

    const response = await fetch("https://api-us.cometchat.io/v2.0/users", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'appid': COMETCHAT_CONSTANTS.APP_ID,
        'apikey': COMETCHAT_CONSTANTS.API_KEY
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    console.log(response);
    this.currentUser = response;
    return response.json(); // parses JSON response into native JavaScript objects
  }
}
