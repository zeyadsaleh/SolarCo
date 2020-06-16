import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../../../shared/services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {

  errorMessage = '';
  title: string = 'Contact Us';
  private offerUrl = `${this.api.host}/contacts`;
  submitted:boolean = false;
  @ViewChild('myAnchor') myAnchor: ElementRef<HTMLElement>;

  contactObj = {
    name: '',
    email: '',
    message: '',
    phone: ''
  }

  constructor(private http: HttpClient,
    private api: GlobalService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
     this.http.post(this.offerUrl,this.contactObj).subscribe(
      res => {
         this.myAnchor.nativeElement.click();
         console.log(res);
         this.contactObj.name = '';
         this.contactObj.email = '';
         this.contactObj.phone = '';
         this.contactObj.message = '';
         this.submitted = false;
         this.errorMessage = '';
      },
      error => {
        console.log(error);
        this.submitted = false;
        this.errorMessage = error.error.error;
      }
    );
  };
}
