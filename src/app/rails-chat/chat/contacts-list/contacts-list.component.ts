import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  @Output() userSelected = new EventEmitter<any>();
  @Output() contactsReady = new EventEmitter<any>();
  @Input() selectedUser;

  activeUser;
  contacts = [];
  isLoading: boolean = true;
  noResponse: boolean = false;

  constructor(readonly contactsService: ContactsService,
    readonly userService: UserService) { }

  ngOnInit() {
    setTimeout(() => { this.timeOut() }, 40000);
    if (this.userService.user_type == 'USER') {

      this.contactsService.getUserContacts().subscribe(
        res => {
          this.contacts = res;
          this.isLoading = false;
          if (!this.selectedUser)
            this.selectFirstContact();
          else
            this.setActiveUser(this.selectedUser)
        }
      );

    } else if (this.userService.user_type == 'CONTRACTOR') {

      this.contactsService.getContractorContacts().subscribe(
        res => {
          this.contacts = res;
          this.isLoading = false;
          if (!this.selectedUser)
            this.selectFirstContact();
          else
            this.setActiveUser(this.selectedUser)
        }
      );

    }
  }

  private selectFirstContact() {
    if (
      this.contacts &&
      this.contacts.length !== 0
    ) {
      this.onUserSelected(this.contacts[0] as any);
    } else {
      this.onUserSelected(null);
    }
  }

  setActiveUser(user) {
    this.activeUser = user;
  }

  onUserSelected(user) {
    this.activeUser = user;
    this.userSelected.emit(user);
  }

  timeOut() {
    if (this.isLoading == true) {
      this.noResponse = true;
      this.isLoading = false;
    }
  }
}
