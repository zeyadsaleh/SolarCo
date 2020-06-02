import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCommentComponent } from './comment/create-comment/create-comment.component';
import { CreateRateComponent } from './rate/create-rate/create-rate.component';
import { GetRateComponent } from './rate/get-rate/get-rate.component';
import { GetCommentComponent } from './comment/get-comment/get-comment.component';
import { OfferReviewService } from '../shared/services/offer-review.service';


@NgModule({
  declarations: [
    CreateCommentComponent, 
    CreateRateComponent, 
    GetRateComponent, 
    GetCommentComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CreateCommentComponent, 
    CreateRateComponent, 
    GetRateComponent, 
    GetCommentComponent
  ],
  providers: [
    OfferReviewService,
  ]
})
export class ReviewModule { }
