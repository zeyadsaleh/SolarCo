import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ShareService } from 'src/app/shared/services/share.service';
@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  post;
  title:string = 'Your Post';
  isLoading:boolean = true;
  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router, private __service: ShareService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getPost(+params['id']);
    });
  }

  getPost(id) {
    this.postService.getPost(id).subscribe((res)=>{
        this.post = res;
        this.isLoading = false;
        console.log(this.post.id)
    });
  }

  deletePost(id){
    this.postService.deletePost(id).subscribe()
  }

  sendId(id) {
    this.router.navigate(['/offers/new'], { queryParams: { id: id }, queryParamsHandling: 'merge' });
  }

}
