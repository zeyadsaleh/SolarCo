import { Component, OnInit, Input } from '@angular/core';
import { OfferReviewService } from 'src/app/shared/services/offer-review.service';

@Component({
  selector: 'app-get-comment',
  templateUrl: './get-comment.component.html',
  styleUrls: ['./get-comment.component.css']
})
export class GetCommentComponent implements OnInit {
  
  @Input() offer_id:number; 
  comments: string;
  
  constructor(private __service: OfferReviewService) { }

  ngOnInit(): void {
    this.__service.getReviews(this.offer_id).subscribe(
      (response) => {
        if(response){
          this.comments = response;
        }
      })
  }

}
