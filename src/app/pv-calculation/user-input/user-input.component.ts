import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeoLoactionService } from 'src/app/shared/services/geo-loaction.service';
import { ShareService } from 'src/app/shared/services/share.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  client_request: object;
  api_response: object;
  
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
        // this.src = this.geolocation.getMapLink(location);
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
      if(response){
        this.client_request['api'] = response; 
        this.__service.setData(this.client_request)
        this.router.navigate(['calculate']);
      }
    });
  }

}

