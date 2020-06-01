import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/shared/services/share.service';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  posts=[];
  title:string = 'Posts';
  isLoading:boolean = true;
  constructor(
    private postService: PostService,
    private router: Router,
    private __service: ShareService,
    ) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe((res)=>{
      if(res){
        console.log("res: " ,res)
        for (let o of res){
          this.posts.push(o);
        }
      }else{
        console.log("no posts received")
      }

      this.isLoading = false;
    });
  }

  deletePost(id){
    this.postService.deletePost(id).subscribe(
      res => {
        } ,
      error => {
      }
    )
  }


  sendId(id) {
    this.router.navigate(['/offers/new'], { queryParams: { id: id }, queryParamsHandling: 'merge' });
    // this.__service.setData(id);
    // this.router.navigate(['/offers/new', id]);
  }

   isIterable(res) {
    // checks for null and undefined
    if (res == null) {
      return false;
    }
    return typeof res[Symbol.iterator] === 'function';
  }
}
