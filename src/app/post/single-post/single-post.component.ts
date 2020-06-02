import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ShareService } from 'src/app/shared/services/share.service';
import {AngularTokenService} from "angular-token";

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
  isLoading:boolean = true;
  type;
  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router, private __service: ShareService, public tokenAuthService:AngularTokenService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getPost(+params['id']);
    });

    this.tokenAuthService.validateToken().subscribe(
      res => {
        this.userData = this.tokenAuthService.currentUserData;
        this.type = this.tokenAuthService.currentUserType;
        console.log(this.userData)
        this.isLoading = false;
      },
      error => console.log(error)
      );

    
  }

  getPost(id) {
    this.postService.getPost(id).subscribe((res)=>{
        this.post = res;
        console.log(res);
        for (let offer of res.offer){
          this.offers.push(offer);
        }
    });
  }

  deletePost(id){
    this.postService.deletePost(id).subscribe()
  }

  sendId(id) {
    this.router.navigate(['/offers/new'], { queryParams: { id: id }, queryParamsHandling: 'merge' });
  }

}
