import { Component, OnInit, OnDestroy } from '@angular/core';

import { ChatAuthService } from '../shared/services/chat-auth.service';
import { CometChat } from '@cometchat-pro/chat';
import { ChatService } from '../shared/services/chat.service';
import { Router } from '@angular/router';

const listenerId = 'ChatScreenListener';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  selectedUser: CometChat.UserObj;
  messages: CometChat.TextMessage[] | null = null;

  constructor(
    readonly chatAuthService: ChatAuthService,
    readonly chatService: ChatService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.chatAuthService.currentUser);
    this.chatService.listenForMessages(listenerId, msg => {
      console.log('New message: ', msg);
      this.messages = [...this.messages, msg];
    });
  }

  ngOnDestroy() {
    this.chatService.removeMessageListener(listenerId);
  }

  async onUserSelected(usr: CometChat.UserObj) {
    this.selectedUser = usr;
    console.log(this.selectedUser);
    const messages = await this.chatService.getPreviousMessages(usr.uid);
    console.log('Previous messages', messages);

    this.messages = (messages as any[]).filter(msg => msg.type === 'text');
  }

  async onSendMessage(message: string) {
    console.log('sending message: ', message);
    console.log(this.selectedUser)
    const sentMessage = await this.chatService.sendMessage(
      this.selectedUser.uid,
      message
    );

    console.log({ sentMessage });

    if (sentMessage) {
      this.messages = [...this.messages, sentMessage as any];
    }
  }

  logout() {
    CometChat.logout().then(res => {
      //Logout completed successfully
      console.log("Logout completed successfully");
      this.router.navigateByUrl('/login');
    }, error => {
      //Logout failed with exception
      console.log("Logout failed with exception:", { error });
    })
  }
}
