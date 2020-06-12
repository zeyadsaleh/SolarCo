import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/shared/services/tutorial.service';
import { NgForm } from '@angular/forms';
import { Tutorial } from 'src/app/shared/interfaces/tutorial';

@Component({
  selector: 'app-create-tutorial',
  templateUrl: './create-tutorial.component.html',
  styleUrls: ['./create-tutorial.component.css']
})
export class CreateTutorialComponent implements OnInit {

  post: Tutorial;
  error = new Array;
  categories = new Array;

  constructor(private __service: TutorialService) { }

  ngOnInit(): void {
    this.__service.getCategories().subscribe(
      (response) => {
        console.log(response);
        this.categories = response;
      })
  }

  onSubmit(post: NgForm) {
    if (post.valid) {
      this.__service.setTutorial(post.value).subscribe(
        (response) => {
          console.log(response);
        },
        error => {
          console.log(error);
          // this.error = error.error;
        })
    }
  }
}
