import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeoLoactionService } from 'src/app/shared/services/geo-loaction.service';
import { ShareService } from 'src/app/shared/services/share.service';
import { Router } from '@angular/router';
import { UserRequest } from 'src/app/shared/interfaces/user-request';
@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  client_request: object;
  api_response: object;
  permission: boolean = true;
  title: string = 'Pv-System Calculate';
  error: string;
  ignore: boolean = false;
  backup: boolean = false;

  constructor(private geolocation: GeoLoactionService,
    private http: HttpClient,
    private router: Router,
    private __service: ShareService) { }

  ngOnInit(): void {
    this.client_request = new Object();
    this.getIpAddress();
  }

  getLocation() {
    this.geolocation.requestLocation(location => {
      if (location) {
        console.log(location);
        this.client_request["lat"] = +(location.latitude - 0.004553999999998837 * (location.accuracy / 8741)).toFixed(6);
        this.client_request["long"] = +(location.longitude + 0.015978000000000492 * (location.accuracy / 8741)).toFixed(6);
        this.client_request["src"] = this.geolocation.getMapLink(location);
        console.log(this.geolocation.getMapLink(location));
        this.ignore = true;
      }
    });
  }

  getIpAddress() {
    this.http.get("http://api.ipify.org/?format=json").subscribe((response: any) => {
      this.client_request["ip"] = response.ip;
    });
  }

  confirm() {
    if (this.client_request['consump'] && this.client_request['consump'] > 0) {
      this.geolocation.getLocation(this.client_request, response => {
        if (response && response['permission']) {
          if (this.client_request['src']) response['src'] = this.client_request['src'];
          response['backup'] = this.backup;
          this.__service.setData(response)
          this.router.navigate(['pv-system/calculate']);
        } else {
          this.error = "Some issues happens with your request, try it later!";
        }
      });
    } else {
      this.error = "Please fill the form with valid input!"
    }
  }

}

