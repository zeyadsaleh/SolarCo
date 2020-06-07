import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { ChatService } from './services/chat.service';
import { MessagesService } from './services/messages.service';
import { type } from 'os';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  selectedUser;
  messages;
  isLoading:boolean = true;

  constructor(readonly route: ActivatedRoute,
              readonly userService: UserService,
              private chatService: ChatService,
              private messagesService: MessagesService) { }

  ngOnInit(): void {
    console.log("OnInit chat")
    if(this.userService.user_type == 'USER'){
      this.route.paramMap.subscribe(params => {

        this.userService.getContractor(params.get('id')).subscribe(res => {
          this.selectedUser = res;
          this.initChat();
          this.isLoading = false;
        })

      })
    } else if(this.userService.user_type == 'CONTRACTOR') {
      this.route.paramMap.subscribe(params => {

        this.userService.getClient(params.get('id')).subscribe(res => {
          this.selectedUser = res;
          this.initChat();
          this.isLoading = false;
        })

      })
    }
  }

  async initChat() {
    if(this.userService.user_type == 'USER') {
      await this.chatService.openChannel(this.userService.current_user, this.selectedUser);
      this.messagesService.getOldMessages(this.userService.current_user.id, this.selectedUser.id).subscribe(
        res => {
          this.messages = res;
          console.log(res)
        }
      );
    } else if (this.userService.user_type == 'CONTRACTOR') {
      await this.chatService.openChannel(this.selectedUser, this.userService.current_user);
      this.messagesService.getOldMessages(this.selectedUser.id, this.userService.current_user.id).subscribe(
        res => {
          this.messages = res;
          console.log(res)
        }
      );
    }

    this.chatService.channel.received().subscribe(res=> {
      this.messages = [...this.messages, res.message as any];
    })
  }

  onSendMessage(message: string) {
    this.chatService.sendMessage(message);
  }

  ngOnDestroy() {
    this.chatService.unsubscribe();
  }
}
