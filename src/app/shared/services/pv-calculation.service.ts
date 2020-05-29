import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PvCalculationService {

  constructor(private http: HttpClient) { }

  public apiUrl:String = 'http://localhost:3000';

  getSystem(callback){
    this.http.get(`${this.apiUrl}/calculations`).subscribe(response =>{
      console.log(response);
      callback(response);
    });
  }

  setSystem(client_data, callback){
    this.http.post(`${this.apiUrl}/pv-calculation`, client_data).subscribe(response =>{
      console.log(response);
      callback(response);
    });
  }

}
