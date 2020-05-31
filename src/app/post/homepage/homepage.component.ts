import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  posts=[];
  title:string = 'Posts';
  isLoading:boolean = true;
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe((res)=>{
      for (let o of res){
        this.posts.push(o);
      }
      this.isLoading = false;
    });
  }

  deletePost(id){
    this.postService.deletePost(id).subscribe()
  }
}
