import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';

@Injectable()
export class GeoLoactionService {

  constructor(private http: HttpClient,
    private api: GlobalService) { }

  requestLocation(callback) {
    //W3C Geolaction API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        success => {
          console.log(success);
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

  getMapLink(location) {
    let query = "";
    if (location.latitude) {
      // let lat = +location.latitude.toFixed(6) - 31.228103;
      // let long = +location.longitude.toFixed(6) - 29.958603;
      // console.log(lat);
      // console.log(long);
      query = `${+(location.latitude).toFixed(6)},${(location.longitude).toFixed(6)
        }`;
      return `https://maps.google.com/?q=${query}`;
    } else {
      return "No Location Set!"
    }
  }

  // get
  getLocation(client_data, callback) {
    this.http.post(`${this.api.host}/geocoder`, client_data).subscribe(response => {
      console.log(response);
      callback(response);
    });
  }
}
