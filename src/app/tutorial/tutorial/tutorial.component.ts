import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/shared/services/tutorial.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  title: string = '';
  tutorial: object;

  constructor(private __service: TutorialService,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getTutorial(+params['id']);
    });
  }

  getTutorial(id) {
    this.__service.getTutorial(id).subscribe(
      (response) => {
        if (response) {
          this.tutorial = response;
        } else {

        }
      })
  }
}
