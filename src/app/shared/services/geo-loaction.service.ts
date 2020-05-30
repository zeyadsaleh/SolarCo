import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GeoLoactionService {

  constructor(private http: HttpClient) { }

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
      callback("Geolocation is not supported by this browser.");
    }
  }

  getMapLink(location){
    let query = "";
    if(location.latitude){
      query = `${location.latitude},${location.longitude}`;
      return `https://maps.google.com/?q=${query}`;
    }else{
      return "No Location Set!"
    }
  }

  // get
  getLocation(client_data, callback){
    this.http.post('http://localhost:3000/geocoder', client_data).subscribe(response =>{
      console.log(response);
      callback(response);
    });
  }
}
