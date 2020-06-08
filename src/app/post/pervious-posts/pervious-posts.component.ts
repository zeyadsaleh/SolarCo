import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pervious-posts',
  templateUrl: './pervious-posts.component.html',
  styleUrls: ['./pervious-posts.component.css']
})
export class PerviousPostsComponent implements OnInit {
  posts = [];
  title: string = 'Posts';
  isLoading: boolean = true;

  system_data: object;
  toProfile: boolean;

  constructor(
    private postService: PostService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getApprovedPosts();
  }

  getApprovedPosts() {
    // Don't render banner in profile posts
    if (this.router.url.includes('profile'))
      this.toProfile = true;

    this.postService.getApprovedPosts().subscribe((res) => {
      if (res) {
        console.log("res: ", res)
        for (let o of res) {
          this.posts.push(o);
        }
      } else {
        console.log("no posts received")
      }

      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    });
  }

  deletePost(id) {
    this.postService.deletePost(id).subscribe(
      res => {
      },
      error => {
      }
    )
  }

  isIterable(res) {
    // checks for null and undefined
    if (res == null) {
      return false;
    }
    return typeof res[Symbol.iterator] === 'function';
  }
}

