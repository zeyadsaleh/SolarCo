import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PvCalculationService {

  constructor(private http: HttpClient) { }

  private apiUrl:String = 'http://localhost:3000/calculations';

  // delete
  delSystem(calc_id){
    this.http.delete(`${this.apiUrl}/${calc_id}`).subscribe();
  }

  // post
  setSystem(system_id, callback){
    this.http.post(`${this.apiUrl}`, system_id).subscribe(response =>{
      console.log(response);
      callback(response);
    });
  }

  // get/:id
  getSystem(calc_id, callback){
    this.http.get(`${this.apiUrl}/${calc_id}`).subscribe(response =>{
      console.log(response);
      callback(response);
    });
  }
  // get
  getSystems(callback){
    this.http.get('http://localhost:3000/systems').subscribe(response =>{
      console.log(response);
      callback(response);
    });
  }
  
}
