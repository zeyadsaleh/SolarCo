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
  getCalculation(calc_id, successback, errorback) {
    this.http.get(`${this.apiCal}/${calc_id}`).subscribe(
      success => {
        successback(success);
      },
      error => {
        errorback(error);
      });
  }
  // get
  getCalculations(successback, errorback) {
    this.http.get(`${this.apiCal}`).subscribe(
      success => {
        successback(success);
      },
      error => {
        errorback(error);
      });
  }

  private apiSys: String = `${this.api.host}/systems`;

  // delete
  delCalculation(sys_id, successback, errorback) {
    this.http.delete(`${this.apiSys}/${sys_id}`).subscribe(
      success => {
        successback(success);
      },
      error => {
        errorback(error);
      });
  }

  // post
  setSystem(system_data, successback, errorback) {
    this.http.post(`${this.apiSys}`, system_data).subscribe(
      success => {
        successback(success);
      },
      error => {
        errorback(error);
      });
  }

  // get
  getSystems(successback, errorback) {
    this.http.get(`${this.apiSys}`).subscribe(
      success => {
        successback(success);
      },
      error => {
        errorback(error);
      });
  }

}
