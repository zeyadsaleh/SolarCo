import { Component, OnInit } from '@angular/core';
import { PvCalculationService } from '../../shared/services/pv-calculation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareService } from 'src/app/shared/services/share.service';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-pv-system',
  templateUrl: './pv-system.component.html',
  styleUrls: ['./pv-system.component.css']
})
export class PvSystemComponent implements OnInit {

  system_data: object;
  title: string = 'Pv-System';
  panelOpenState1: boolean = false;
  panelOpenState2: boolean = false;
  panelOpenState3: boolean = false;
  error: string;
  unautherized: string;
  isLoading: boolean = true;
  noResponse: boolean = false;

  constructor(private data: PvCalculationService,
    private route: ActivatedRoute,
    private router: Router,
    private __service: ShareService,
    public tokenAuth: AngularTokenService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (Number.isInteger(+params['id'])) {
        this.getSystemDetails(+params['id']);
      } else {
        this.router.navigate(['404']);
      }
    });
  }

  getSystemDetails(id) {
    this.data.getCalculation(id,
      response => {
        if (response) {
          this.system_data = response;
          setTimeout(() => {
            this.isLoading = false;
          }, 400);
        } else {
          this.router.navigate(['pv-system/user-info']);
        }
      },
      error => {
        this.unautherized = error.error.error;
          setTimeout(() => {
            this.isLoading = false;
          }, 200);
      });
  }

  publish() {
    if (this.tokenAuth.userSignedIn() && this.tokenAuth['currentUserType'] == 'USER' && this.tokenAuth['userData']['id'] == this.system_data['system']['user_id']) {
      if (!this.system_data['published']) {
        this.__service.setData(this.system_data);
        this.router.navigate(['create/post']);
      } else {
        this.error = "this Post is published";
      }
    }
  }

  delete() {
    if (this.tokenAuth.userSignedIn() && this.tokenAuth['currentUserType'] == 'USER' && this.tokenAuth['userData']['id'] == this.system_data['system']['user_id']) {
      this.data.delCalculation(this.system_data['system']['id'],
        (response) => {
          this.router.navigate(['profile/systems']);
        },
        (error) => {
          this.error = error.error.error;
        });
    }
  }

  timeOut() {
    if (this.isLoading == true) {
      this.noResponse = true;
      this.isLoading = false;
    }
  }

}

