import { Injectable, HostListener, Inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public host:String = environment.apiUrl;

  constructor() { }
}
