import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { ChatService } from './services/chat.service';
import { MessagesService } from './services/messages.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  selectedUser;
  messages = [];
  isLoading:boolean = true;
  connected = false;
  title:string = 'Inbox';
  emptyInbox: boolean;

  constructor(readonly route: ActivatedRoute,
              readonly userService: UserService,
              private chatService: ChatService,
              private messagesService: MessagesService) { 
      
    this.route.paramMap.subscribe(params => {

      if(params.has('id')) {
        this.userService.getContractor(params.get('id')).subscribe(res => {
          this.selectedUser = res;
          this.initChat();
        })
      } else {
        this.connected = true;
      }

      this.isLoading = false;
    })
  }

  ngOnInit(): void {}

  async initChat() {
    if(this.userService.user_type == 'USER') {
      await this.chatService.openChannel(this.userService.current_user, this.selectedUser);
    } else if (this.userService.user_type == 'CONTRACTOR') {
      await this.chatService.openChannel(this.selectedUser, this.userService.current_user);
    }

    this.chatService.channel.connected().subscribe(() => {
      this.connected = true;
    })

    this.chatService.channel.received().subscribe(res=> {
      this.messages = [...this.messages, res.message as any];
    })
  }

  onSendMessage(message: string) {
    this.chatService.sendMessage(message);
  }

  async onUserSelected(usr) {
    if (usr) {
      this.selectedUser = usr;
      this.initChat();
      this.getOldMessages();
    } else {
      this.emptyInbox = true;
    }
    
  }

  getOldMessages() {
    if(this.userService.user_type == 'USER') {
      this.messagesService.getOldMessages(this.userService.current_user.id, this.selectedUser.id).subscribe(
        res => {
          this.messages = [].slice.call(res);
        }
      );
    } else if (this.userService.user_type == 'CONTRACTOR') {
      this.messagesService.getOldMessages(this.selectedUser.id, this.userService.current_user.id).subscribe(
        res => {
          this.messages = [].slice.call(res);
        }
      );
    }
  }

  ngOnDestroy() {
    this.chatService.unsubscribe();
  }
}
