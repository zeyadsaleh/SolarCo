import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';
import { ShareService } from 'src/app/shared/services/share.service';
import { Router } from '@angular/router';

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
  system_data: object;

  constructor(private postService: PostService,
              private router: Router,
              private __service: ShareService) { }

  ngOnInit(): void {
    this.__service.Data.subscribe((data) => {
      if(data){
        this.system_data = data;
      }else{
        this.router.navigate(['system-info']);
      }
    });
  }

  onSubmit(){
  //   this.postService.createPost(this.post).subscribe(
  //     res => {
  //       // console.log(res);
  //       // this.router.navigate(['home']);
  //       } ,
  //     error => {
  //       // console.log(error);
  //       // this.errorMessage =error.error.errors[0];
  //     }
  //   );
  }

}
