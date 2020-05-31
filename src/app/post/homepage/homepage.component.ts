import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  posts=[];
  // title:string = 'Posts';
  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe((res)=>{
      for (let o of res){
        this.posts.push(o);
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
