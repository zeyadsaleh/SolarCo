import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-post-form',
  templateUrl: './update-post-form.component.html',
  styleUrls: ['./update-post-form.component.css']
})
export class UpdatePostFormComponent implements OnInit {
  id;
  post = {
    title:'',
    description:'',
    system_id:1
  }
  // title:string = 'Update Post';
  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']
      this.getPost(this.id);
    });
  }

  getPost(id) {
    this.postService.getPost(id).subscribe((res)=>{
        this.post = res;
    });
  }

  onSubmit(){
    this.postService.updatePost(this.id,this.post).subscribe(
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
