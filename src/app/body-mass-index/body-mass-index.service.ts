import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpService} from '../authentication/http.service';
import {map} from 'rxjs/operators';
import {BodyMassIndex} from './body-mass-index';

@Injectable({
  providedIn: 'root'
})
export class BodyMassIndexService {

  headers = new HttpHeaders({Authorization: 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))});

  constructor(private http: HttpClient) {
  }


  postBodyMassIndex(bodyMassIndex: BodyMassIndex): Observable<BodyMassIndex> {
    return this.http.post(HttpService.SERVICE_PATH + 'bodyMassIndexes', bodyMassIndex, {headers: this.headers})
        .pipe(map(response => <BodyMassIndex>response));
  }

  putBodyMassIndex(bodyMassIndex: BodyMassIndex): Observable<BodyMassIndex> {
    return this.http.put(HttpService.SERVICE_PATH + 'bodyMassIndexes', bodyMassIndex, {headers: null})
        .pipe(map(response => <BodyMassIndex>response));
  }

  deleteBodyMassIndex(bodyMassIndex: BodyMassIndex): Observable<BodyMassIndex> {
    return this.http.delete(HttpService.SERVICE_PATH + 'bodyMassIndexes/' + bodyMassIndex.bodyMassIndexSeq, {headers: null})
        .pipe(map(response => <BodyMassIndex>response));
  }

  getBodyMassIndexs(): Observable<BodyMassIndex[]> {
    return this.http.get(HttpService.SERVICE_PATH + 'bodyMassIndexes', {headers: this.headers})
        .pipe(map(response => <BodyMassIndex[]>response));
  }
}
