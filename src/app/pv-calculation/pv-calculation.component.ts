import { Component, OnInit } from '@angular/core';
import { GeoLoactionService } from '../shared/services/geo-loaction.service';
import { PvCalculationService } from '../shared/services/pv-calculation.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pv-calculation',
  templateUrl: './pv-calculation.component.html',
  styleUrls: ['./pv-calculation.component.css']
})
export class PvCalculationComponent implements OnInit {

  consumption: number;
  client_request: object;
  src: string;
  
  constructor(private geolocation: GeoLoactionService, 
              private data: PvCalculationService,
              private http: HttpClient) { }

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
        this.src = this.geolocation.getMapLink(location);
        console.log(this.src);  
      }
    });
  }

  getIpAddress(){  
    this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
      this.client_request["ip"] =  res.ip;
    }); 
  }

  save(){
    this.client_request["consump"] = this.consumption; 
    this.data.setSystem(this.client_request, api =>{
      if(api){
        console.log(api);  
      }
    });
  }

}
