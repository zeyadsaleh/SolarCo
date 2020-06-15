import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';
import { ShareService } from 'src/app/shared/services/share.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/shared/interfaces/post';

@Component({
  selector: 'app-create-post-form',
  templateUrl: './create-post-form.component.html',
  styleUrls: ['./create-post-form.component.css']
})
export class CreatePostFormComponent implements OnInit {
  post: Post;
  system_data: object;
  title: string = 'New Post';
  errorMessage: string;
  system_id: number;
  isLoading: boolean = true;
  noResponse: boolean = false;

  constructor(private postService: PostService,
    private router: Router,
    private __service: ShareService) { }

  ngOnInit(): void {
    setTimeout(() => { this.timeOut() }, 40000);
    this.__service.Data.subscribe((data) => {
      if (data) {
        this.system_data = data;
        this.system_id = data.system.id;
        setTimeout(() => {
          this.isLoading = false;
        }, 200);
      } else {
        this.router.navigate(['profile/systems']);
      }
    });
  }

  onSubmit(post: NgForm) {
    if (post.valid) {
      console.log(post.value);
      post.value['system_id'] = (this.system_id)
      this.postService.createPost(post.value).subscribe(
        res => {
          console.log(res);
          this.router.navigate([`posts/${res.id}`]);
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.error;
        }
      );
    }
  }

  timeOut() {
    if (this.isLoading == true) {
      console.log("noresponse");
      this.noResponse = true;
      this.isLoading = false;
    }
  }

}
