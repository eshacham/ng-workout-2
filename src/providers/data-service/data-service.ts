import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DataServiceProvider Provider');
  }

  public static _lastSelectedWorkoutDayIndex = 0;
  //get lastSelectedWorkoutDayIndex(): number { return this._lastSelectedWorkoutDayIndex }
  //set lastSelectedWorkoutDayIndex(value: number) { this._lastSelectedWorkoutDayIndex = value }

}
