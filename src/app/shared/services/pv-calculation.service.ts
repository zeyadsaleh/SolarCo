import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PvCalculationService {

  constructor(private http: HttpClient) { }

  public apiUrl:String = 'http://localhost:3000';

  // CALC API

  // delete
  delSystem(calc_id){
    this.http.delete(`${this.apiUrl}/pv-calculation/${calc_id}`).subscribe();
  }

  // post
  setSystem(system_id, callback){
    this.http.post(`${this.apiUrl}/pv-calculation`, system_id).subscribe(response =>{
      console.log(response);
      callback(response);
    });
  }

  // get
  getSystem(calc_id, callback){
    this.http.get(`${this.apiUrl}/pv-calculation/${calc_id}`).subscribe(response =>{
      console.log(response);
      callback(response);
    });
  }


  // SYSTEM API

  //post
  setSystemInfo(client_data, callback){
    this.http.post(`${this.apiUrl}/system-info`, client_data).subscribe(response =>{
      console.log(response);
      callback(response);
    });
  }

  // delete
  delSystemInfo(system_id){
    this.http.delete(`${this.apiUrl}/system-info/${system_id}`).subscribe();
  }

  // get
  getSystemInfo(system_id, callback){
    this.http.get(`${this.apiUrl}/system-info/${system_id}`).subscribe(response =>{
      console.log(response);
      callback(response);
    });
  }
}
