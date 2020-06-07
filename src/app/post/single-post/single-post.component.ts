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
  title: string = 'Your Post';
  errorMessage: string = '';
  isLoading: boolean = true;
  currentUserID: any;
  applied: boolean = false;
  constructor(private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private __service: ShareService,
    private tokenAuth: AngularTokenService) { }

  ngOnInit(): void {
    this.tokenAuth.validateToken().subscribe(
      res => {
        this.userData = this.tokenAuth.currentUserData;
        console.log(this.userData)
        this.route.params.subscribe(params => {
          this.getPost(+params['id']);
        });
      },
      error => console.log(error)
    );


  }

  getPost(id) {
    this.currentUserID = this.tokenAuth.currentUserData.id.toString();
    this.postService.getPost(id).subscribe((res) => {
      this.post = res;
      setTimeout(() => {
        this.isLoading = false;
      }, 500);        // For Apply button
      let userOffer = this.post.offers.filter(offer => offer.contractor_id == this.currentUserID);
      console.log(userOffer);
      if (userOffer.length > 0) {
        this.applied = true;
      }
      console.log(this.post)
    }, (err) => {
      this.errorMessage = err.error.error;
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    });
  }

  deletePost(id) {
    this.postService.deletePost(id).subscribe()
  }

  sendId(id) {
    this.router.navigate(['/offers/new'], { queryParams: { id: id }, queryParamsHandling: 'merge' });
  }

  onDeleteOffer() {
    this.applied = false;
  }

}
