import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public host:String = 'https://solarco-api.herokuapp.com/';
  constructor() { }
}
