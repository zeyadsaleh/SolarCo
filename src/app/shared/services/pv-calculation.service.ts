import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service'
@Injectable()
export class PvCalculationService {

  constructor(private http: HttpClient,
              private api: GlobalService) { }

  private apiCal: String = `${this.api.host}/calculations`;

  // get/:id
  getCalculation(calc_id, successback) {
    this.http.get(`${this.apiCal}/${calc_id}`).subscribe(
      success => {
        console.log(success);
        successback(success);
      });
  }
  // get
  getCalculations(successback) {
    this.http.get(`${this.apiCal}`).subscribe(
      success => {
        console.log(success);
        successback(success);
      });
  }

  private apiSys: String = `${this.api.host}/systems`;

  // delete
  delCalculation(sys_id, errorback) {
    this.http.delete(`${this.apiSys}/${sys_id}`).subscribe(
      error => {
        console.log(error);
        errorback(error);
      });
  }

  // post
  setSystem(system_data, successback, errorback) {
    this.http.post(`${this.apiSys}`, system_data).subscribe(
      success => {
        console.log(success);
        successback(success);
      },
      error => {
        console.log(error);
        errorback(error);
      });
  }

  // get
  getSystems(successback) {
    this.http.get(`${this.apiSys}`).subscribe(
      success => {
        console.log(success);
        successback(success);
      });
  }

}
