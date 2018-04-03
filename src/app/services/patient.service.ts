import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PatientService {

  private patient: Array<Object> = [];

  private activePatientIndexSource = new BehaviorSubject<Number>(0);
  public activePatientIndex = this.activePatientIndexSource.asObservable();

  // private dataSource = new BehaviorSubject<Array<Object>>([]);
  // public data = this.dataSource.asObservable();

  // private dataSource: Array<Object> = [{ id: 1, name: 'A' }];
  // public data = new Subject();

  constructor() {
    this.patient = this.loadInitialData();
  }

  // changeData(arr) {
  //   console.log(this.data);
  //   this.dataSource.next(arr);
  // }

  // addData(obj) {
  //   this.dataSource.push(obj);
  //   this.data.next(this.dataSource);
  // }

  get(): Observable<Array<Object>> {
    return Observable.from([this.patient]);
  }

  add() {
    this.patient.push({
      name: 'New patient',
      createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
      id: this.generateUniqueId(),
      notes: ''
    });

    this.changeActivePatientIndex(this.patient.length - 1);
  }

  changeActivePatientIndex(index) {
    this.activePatientIndexSource.next(index);
  }

  private generateUniqueId() {
    return moment().unix() + '.' + Math.random().toString(36).substr(2, 9);
  }

  private loadInitialData() {
    return [
      { name: 'Test name', createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'), id: this.generateUniqueId(), notes: '' },
      { name: 'Another name', createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'), id: this.generateUniqueId(), notes: '' }
    ];
  }

}
