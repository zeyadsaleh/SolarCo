import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  posts = new Array;
  title: string = 'Posts';
  isLoading: boolean = true;
  noResponse: boolean = false;
  p: number = 1;
  system_data: object;
  toProfile: boolean;

  constructor(
    private postService: PostService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {this.timeOut()}, 40000);
    this.getPosts();
  }

  getPosts() {
    // Don't render banner in profile posts
    if (this.router.url.includes('profile'))
      this.toProfile = true;

    this.postService.getPosts().subscribe((res) => {
      if (res) {
        for (let o of res) {
          this.posts.push(o);
          // console.log(o)
        }
      } else {
      }
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

  isIterable(res) {
    // checks for null and undefined
    if (res == null) {
      return false;
    }
    return typeof res[Symbol.iterator] === 'function';
  }

  timeOut() {
    if (this.isLoading == true) {
      this.noResponse = true;
      this.isLoading = false;
    }
  }

  //scroll up whenever you change the page on pagination
  pageChanged(event) {
    this.p = event;
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 30); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 8);
  }
}
