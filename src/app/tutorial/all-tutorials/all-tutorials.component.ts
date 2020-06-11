import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/shared/services/tutorial.service';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-all-tutorials',
  templateUrl: './all-tutorials.component.html',
  styleUrls: ['./all-tutorials.component.css']
})
export class AllTutorialsComponent implements OnInit {

  title: string = "Tutorial";
  tutorials = new Array;
  p: number = 1;

  constructor(private __service: TutorialService,
    public tokenAuth: AngularTokenService) { }

  ngOnInit(): void {
    this.getTutorials();
  }

  getTutorials() {
    this.__service.getTutorials().subscribe(
      (response) => {
        this.tutorials = response;
      })
  }

}
