import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { SinglePostComponent } from './single-post/single-post.component';

@NgModule({
  declarations: [HomepageComponent,SinglePostComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PostModule { }
