import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  post;
  // title:string = 'Post';
  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getPost(+params['id']);
    });
  }

  getPost(id) {
    this.postService.getPost(id).subscribe((res)=>{
        this.post = res;
    });
  }

  deletePost(id){
    this.postService.deletePost(id).subscribe()
  }

  sendId(id) {
    this.router.navigate(['/offers/new'], { queryParams: { id: id }, queryParamsHandling: 'merge' });
  }

}
