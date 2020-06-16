import { Component, OnInit, Input } from '@angular/core';
import { OfferReviewService } from 'src/app/shared/services/offer-review.service';
import { Router } from '@angular/router';
import { TutorialService } from 'src/app/shared/services/tutorial.service';
import { ShareService } from 'src/app/shared/services/share.service';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  @Input() tutorial_id: number;
  islike: boolean = false;
  like_id: number;
  likes: number = 0;
  dislikes: number = 0;

  constructor(private __service: OfferReviewService,
    private router: Router,
    private __tutService: TutorialService,
    private shareService: ShareService,
    public tokenAuth: AngularTokenService) { }

  ngOnInit(): void {
    this.tutorialLikes();
  }

  tutorialLikes() {
    this.__tutService.getTutorialLikes(this.tutorial_id).subscribe(
      (res) => {
        for (let rs of res) {
          if (this.tokenAuth.userSignedIn() && this.tokenAuth['currentUserType'] == 'USER' && rs['user_id'] == this.tokenAuth['userData']['id']) {
            this.islike = rs['islike'];
            this.like_id = rs['id'];
          }
          if (rs['islike']) {
            this.likes++;
          } else {
            this.dislikes++;
          }
        }
      })
  }

  setIfLike() {
    this.__tutService.getUserLike(this.tutorial_id).subscribe(
      (res) => {
        console.log(res);
      })
  }

  Tlike() {
    this.islike = !this.islike;
    if (this.tokenAuth.userSignedIn() && this.tokenAuth['currentUserType'] == 'USER') {
      if (!this.like_id) {
        this.__tutService.setLike({ "islike": this.islike, "tutorial_id": this.tutorial_id }).subscribe(
          (res) => {
            console.log(res);
            this.like_id = res['id'];
          },
          (error) => {

          });
        if (this.islike) {
          this.likes++;
        } else {
          this.dislikes++;
        }
      } else {
        this.__tutService.updateLike(this.like_id, { "islike": this.islike, "tutorial_id": this.tutorial_id }).subscribe(
          (res) => {
            console.log(res);
          },
          (error) => {

          });
        if (this.islike) {
          this.likes++;
          this.dislikes--;
        } else {
          this.likes--;
          this.dislikes++;
        }
      }
    }
  }

}
