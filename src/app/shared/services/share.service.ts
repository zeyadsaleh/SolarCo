import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

export class ShareService {
  private _data = new BehaviorSubject(null)

  setData(input){
    this._data.next(input);
  }

  get Data(){
    return this._data.asObservable()
  }
}
