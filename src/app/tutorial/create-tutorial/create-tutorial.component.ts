import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/shared/services/tutorial.service';
import { NgForm } from '@angular/forms';
import { Tutorial } from 'src/app/shared/interfaces/tutorial';
import { Router } from '@angular/router';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-create-tutorial',
  templateUrl: './create-tutorial.component.html',
  styleUrls: ['./create-tutorial.component.css']
})
export class CreateTutorialComponent implements OnInit {

  post: Tutorial;
  error: string;
  categories = new Array;

  constructor(private __service: TutorialService, private router: Router, private tokenAuth: AngularTokenService) { }

  ngOnInit(): void {
    if (this.tokenAuth.userSignedIn() && this.tokenAuth['currentUserType'] == 'CONTRACTOR') {
      this.__service.getCategories().subscribe(
        (response) => {
          console.log(response);
          this.categories = response;
        })
    } else {
      this.router.navigate(['login']);
    }
  }

  onSubmit(post: NgForm) {
    if (post.valid) {
      this.__service.setTutorial(post.value).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['blog/', response.id]);
        },
        error => {
          console.log(error);
          this.error = error.error.error;
        })
    }
  }
}
