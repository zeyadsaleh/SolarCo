import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { SinglePostComponent } from './single-post/single-post.component';
import { CreatePostFormComponent } from './create-post-form/create-post-form.component';
import { FormsModule } from '@angular/forms';
import { UpdatePostFormComponent } from './update-post-form/update-post-form.component';
import { PostService } from '../shared/services/post.service';
import { MainComponentModule } from '../main-component/main-component.module';
import { AbilityModule } from '@casl/angular';
import { Ability, PureAbility } from '@casl/ability';

@NgModule({
  declarations: [
    HomepageComponent,
    SinglePostComponent, 
    CreatePostFormComponent, 
    UpdatePostFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MainComponentModule,
    AbilityModule,
  ],
  exports:[
    HomepageComponent,
    SinglePostComponent, 
    CreatePostFormComponent, 
    UpdatePostFormComponent
  ],
  providers:[
    PostService,
    { provide: Ability, useValue: new Ability() },
    { provide: PureAbility, useExisting: Ability }
  ]
})
export class PostModule { }
