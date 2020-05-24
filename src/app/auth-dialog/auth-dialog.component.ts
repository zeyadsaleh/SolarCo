import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.css']
})
export class AuthDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openDialog(mode: 'login' | 'register' = 'login'){
    // this.authMode = mode;
    // this.modalActions.emit({action:"modal", params:['open']});
  }

}
