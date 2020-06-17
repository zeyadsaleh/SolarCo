import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ShareService } from 'src/app/shared/services/share.service';
import { AngularTokenService } from 'angular-token';
@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  offers = [];
  userData;
  post;
  title: string = `Post`;
  errorMessage: string = '';
  isLoading: boolean = true;
  noResponse: boolean = false;
  currentUserID: any;
  applied: boolean = false;
  approved: boolean = false;
  offer_id: number;

  constructor(private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private __service: ShareService,
    public tokenAuth: AngularTokenService) { }

  ngOnInit(): void {
    setTimeout(() => { this.timeOut() }, 40000);
    this.tokenAuth.validateToken().subscribe(
      res => {
        this.userData = this.tokenAuth.currentUserData;
        this.route.params.subscribe(params => {
          if (Number.isInteger(+params['id'])) {
            this.getPost(+params['id']);
          } else {
            this.router.navigate(['404']);
          }
        });
      },
      error => { }
    );
  }

  getPost(id) {
    this.currentUserID = this.tokenAuth.currentUserData.id.toString();
    this.postService.getPost(id).subscribe((res) => {
      this.post = res;
      // For Apply button
      let userOffer = this.post.offers.filter(offer => offer.contractor_id == this.currentUserID);
      let offer = this.post.offers.filter(offer => offer.status == 'accepted');
      if (offer.length > 0) this.offer_id = offer[0].id;

      setTimeout(() => {
        this.isLoading = false;
      }, 500);

      if (userOffer.length > 0) {
        this.applied = true;
      }
      this.title = `${this.post.user.name}\'s Post`;
    }, (err) => {
      this.errorMessage = err.error.error;
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    });
  }

  deletePost(id) {
    this.postService.deletePost(id).subscribe()
    this.router.navigate(['/profile/posts'])
  }

  sendId(id) {
    this.router.navigate(['/offers/new'], { queryParams: { id: id }, queryParamsHandling: 'merge' });
  }

  onDeleteOffer() {
    this.applied = false;
  }

  onApproveOffer($event) {
    this.approved = true;
    this.offer_id = $event;
  }

  timeOut() {
    if (this.isLoading == true) {
      this.noResponse = true;
      this.isLoading = false;
    }
  }
}
