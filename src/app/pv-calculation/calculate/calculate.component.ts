import { Component, OnInit } from '@angular/core';
import { PvCalculationService } from 'src/app/shared/services/pv-calculation.service';
import { ShareService } from 'src/app/shared/services/share.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})

export class CalculateComponent implements OnInit {

  address: string;
  api_response: object;
  title: string = 'Pv-System Calculate';
  error: string;
  isLoading: boolean = true;
  noResponse: boolean = false;

  constructor(private data: PvCalculationService,
    private router: Router,
    private __service: ShareService) { }

  ngOnInit(): void {
    setTimeout(() => {this.timeOut()}, 40000);
    this.__service.Data.subscribe((data) => {
      if (data && data['permission']) {
        this.api_response = data;
        setTimeout(() => {
          this.isLoading = false;
        }, 300);
      } else {
        this.router.navigate(['pv-system/user-info']);
      }
    });
  }

  calculate() {
    if (this.api_response['consumption'] > 0) {
      this.api_response['address'] = this.address;
      this.data.setSystem(this.api_response, succes => {
        if (succes) {
          this.__service.setData(succes);
          this.router.navigate(['pv-system/', succes['id']]);
        }
      }, error => {
        this.error = "Consumption: " + error['error']['consumption'];
      });
    } else {
      this.error = "Consumption: must be greater than 0!";
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
