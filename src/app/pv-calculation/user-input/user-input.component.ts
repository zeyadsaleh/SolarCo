import { Component, OnInit } from '@angular/core';
import { GeoLoactionService } from '../../shared/services/geo-loaction.service';
import { PvCalculationService } from '../../shared/services/pv-calculation.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  consumption: number;
  client_request: object;
  src: string;
  client_data: object;
  
  constructor(private geolocation: GeoLoactionService, 
              private data: PvCalculationService,
              private http: HttpClient,
              private router: Router) { }

  ngOnInit(): void {
    this.client_request = new Object();
    this.client_data = new Object();
    this.getIpAddress();
  }

  getLocation(){
    this.geolocation.requestLocation(location => {
      if(location){
        console.log(location);
        this.client_request["lat"] = location.latitude;
        this.client_request["long"] = location.longitude;
        this.src = this.geolocation.getMapLink(location);
        console.log(this.src);  
      }
    });
  }

  getIpAddress(){  
    this.http.get("http://api.ipify.org/?format=json").subscribe((response:any)=>{
      this.client_request["ip"] =  response.ip;
    }); 
  }

  calculate(){
    this.client_request["consump"] = this.consumption; 
    this.data.setSystemInfo(this.client_request, response =>{
      if(response){
        this.client_data = response;
        this.client_request = new Object();
        console.log(response);  
      }
    });
  }

  cancel(){
    this.data.delSystemInfo(this.client_data['id']);
    this.client_request = new Object();
    this.client_data = new Object();  
  }

  confirm(){
    this.data.setSystem({"id": this.client_data['id']}, response =>{
      if(response['id']){ 
        this.router.navigate(['pv-calculation/', response['id']]);
      }
    });
  }
}

