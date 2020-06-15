import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OfferService } from 'src/app/shared/services/offer.service';
import { Router } from '@angular/router';
import { Offer } from '../shared/interfaces/offer';
import { AngularTokenService } from 'angular-token';
import { PostService } from 'src/app/shared/services/post.service';
import { ShareService } from '../shared/services/share.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  offers = [];
  editOffer: number = 0;
  has_offers: boolean = false;
  @Input() post_id: string = '';
  @Input() postOwner_id: string = '';
  currentUserID: string;
  type: string = '';
  isApproved: boolean = false;
  @Output() onDeleteOffer = new EventEmitter()
  @Output() onApproveOffer = new EventEmitter()
  submitted: boolean = false;
  currentOffer: any = {};
  offers_count = '';
  p: number = 1;

  constructor(private offerService: OfferService, private router: Router, private tokenAuth: AngularTokenService, private postService: PostService, private shareService: ShareService) { }

  ngOnInit(): void {
    this.getOffers();
  }

  getOffers() {
    this.currentUserID = this.tokenAuth.currentUserData.id.toString();
    this.type = this.tokenAuth.currentUserType;
    this.offerService.getOffers(this.post_id).subscribe((res) => {
      for (let o of res) {
        this.offers.push(o);
        //fir offers_count
        this.offers_count = o.post.offers_count;
        //for approval dim
        if (o.status == 'accepted') {
          this.isApproved = true
        }
        // For permissions
        if (this.type == 'CONTRACTOR' &&
          this.currentUserID == o.contractor_id)
          o.canManage = true;
        else
          o.canManage = false;
      }
      if (this.offers.length > 0) {
        this.has_offers = true;
      }
      console.log(this.offers);
    });
  }

  deleteOffer(id) {
    this.offerService.deleteOffer(id).subscribe();
    this.offers = this.offers.filter(function (obj) {
      return obj.id !== id;
    });
    this.onDeleteOffer.emit(); //for showing Apply button after delete the offer
    if (this.offers.length == 0) {
      this.has_offers = false;
    }
  }

  edit(id) {
    if (this.editOffer != id) {
      this.editOffer = id;
    } else {
      this.editOffer = 0;
    }
  }

  onEdit(offer) {
    this.submitted = true;
    this.offerService.updateOffer(offer.id, offer).subscribe(
      res => {
        console.log(res);
        this.offers = new Array();
        this.getOffers();
        this.editOffer = 0;
        this.submitted = false;
      },
      error => {
        console.log(error);
        this.submitted = false;
      }
    );
  }

  handleApprove(offer) {
    offer.status = 'accepted';
    this.onEdit(offer);
    this.isApproved = true;
    this.onApproveOffer.emit(); //remove the update and delete post after approval of the post
    this.postService.updatePost(offer.post.id, { closed: true }).subscribe(
      res => {
        // this.shareService.setData(true);
        console.log(res);
      },
      error => {
        console.log(error);

      });
  }

  //for modal 
  setCurrrentOffer(offer) {
    this.currentOffer = offer;
  }

  //scroll up whenever you change the page on pagination
  pageChanged(event) {
    this.p = event;
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 30); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }
}
