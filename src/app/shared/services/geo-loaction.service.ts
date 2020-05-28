import { Injectable } from '@angular/core';

@Injectable()
export class GeoLoactionService {

  constructor() { }

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
}
