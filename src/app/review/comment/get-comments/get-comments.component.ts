import { Component, OnInit, Input } from '@angular/core';
import { OfferReviewService } from 'src/app/shared/services/offer-review.service';

@Component({
  selector: 'app-get-comments',
  templateUrl: './get-comments.component.html',
  styleUrls: ['./get-comments.component.scss']
})
export class GetCommentsComponent implements OnInit {
  
  @Input() contractor_id:number;
  comments = new Array;
  users: number = 0;
  
  constructor(private __service: OfferReviewService) { }

  ngOnInit(): void {
    console.log(this.contractor_id);
    this.__service.getReviews(this.contractor_id).subscribe(
      (response) => {
        if(response){
          this.setCommentDetails(response);
        }
      })
  }

  setCommentDetails(reviews){
    for (let review of reviews){
      this.comments.push({"comment":review['review'], "date":review['updated_at']});
    }
    this.comments.reverse();
    this.users = reviews['length']
    console.log(this.comments);
    console.log(this.users);
  }

}
