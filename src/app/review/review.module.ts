import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCommentComponent } from './comment/create-comment/create-comment.component';
import { CreateRateComponent } from './rate/create-rate/create-rate.component';
import { OfferReviewService } from '../shared/services/offer-review.service';
import { FormsModule } from '@angular/forms';
import { GetCommentsComponent } from './comment/get-comments/get-comments.component';
import { GetRatesComponent } from './rate/get-rates/get-rates.component';
import { GetRateComponent } from './rate/get-rate/get-rate.component';
import { GetCommentComponent } from './comment/get-comment/get-comment.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    CreateCommentComponent, 
    CreateRateComponent, 
    GetRateComponent, 
    GetCommentComponent, 
    GetCommentsComponent, 
    GetRatesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
  ],
  exports: [
    CreateCommentComponent, 
    CreateRateComponent, 
    GetRateComponent, 
    GetCommentComponent,
    GetCommentsComponent, 
    GetRatesComponent
  ],
  providers: [
    OfferReviewService,
  ]
})
export class ReviewModule { }
