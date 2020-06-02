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
  title:string = 'Pv-System Calculate';
  
  constructor(private geolocation: GeoLoactionService, 
              private http: HttpClient,
              private router: Router,
              private __service: ShareService) { }
              
  ngOnInit(): void {
    this.client_request = new Object();
    this.getIpAddress();
  }

  getLocation(){
    this.geolocation.requestLocation(location => {
      if(location){
        console.log(location);
        this.client_request["lat"] = location.latitude;
        this.client_request["long"] = location.longitude;
        this.client_request["src"] = this.geolocation.getMapLink(location);
      }
    });
  }

  getIpAddress(){  
    this.http.get("http://api.ipify.org/?format=json").subscribe((response:any)=>{
      this.client_request["ip"] =  response.ip;
    }); 
  }

  confirm(){
    this.geolocation.getLocation(this.client_request, response =>{
      if(response && response['permission']){
          this.__service.setData(response)
          this.router.navigate(['pv-system/calculate']);
      } else {
          this.permission = false;
      }
    });
  }

}

