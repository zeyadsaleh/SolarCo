import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GeoLoactionService {

  constructor(private http: HttpClient) { }

  private apiUrl:String = 'http://localhost:3000';

  requestLocation(callback){
    //W3C Geolaction API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        success => {
          callback(success.coords);
        },
        error => {
          callback(error);
        }
      );
    } else {
      // "Geolocation is not supported by this browser.";
    }
  }

  getMapLink(location){
    let query = "";
    if(location.latitude){
      query = `${location.latitude},${location.longitude}`;
    }else{
      query = `${location.address},${location.city}`;
    }
    return `https://maps.google.com/?q=${query}`;
  }

  // get
  getLocation(client_data, callback){
    this.http.post(`${this.apiUrl}/geocoder`, client_data).subscribe(response =>{
      console.log(response);
      callback(response);
    });
  }
}
