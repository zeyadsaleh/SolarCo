import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-create-post-form',
  templateUrl: './create-post-form.component.html',
  styleUrls: ['./create-post-form.component.css']
})
export class CreatePostFormComponent implements OnInit {
  post={
    title:'',
    description:'',
    system_id:1
  }
  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.postService.createPost(this.post).subscribe(
      res => {
        // console.log(res);
        // this.router.navigate(['home']);
        } ,
      error => {
        // console.log(error);
        // this.errorMessage =error.error.errors[0]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ;
        }
    );
  }

}
