import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public host:String = 'http://localhost:3000';
  constructor() { }
}
