import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Farm} from '../farm/farm';
import {Observable} from 'rxjs';
import {HttpService} from '../authentication/http.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FarmService {

  headers = new HttpHeaders({Authorization: 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))});

  constructor(private http: HttpClient) {
  }


  postFarm(farm: Farm): Observable<Farm> {
    return this.http.post(HttpService.SERVICE_PATH + 'farms', farm, {headers: this.headers})
        .pipe(map(response => <Farm>response));
  }

  putFarm(farm: Farm): Observable<Farm> {
    return this.http.put(HttpService.SERVICE_PATH + 'farm', farm, {headers: null})
        .pipe(map(response => <Farm>response));
  }

  deleteFarm(farm: Farm): Observable<Farm> {
    return this.http.delete(HttpService.SERVICE_PATH + 'farms/' + farm.farmSeq, {headers: null})
        .pipe(map(response => <Farm>response));
  }

  getFarms(): Observable<Farm[]> {
    return this.http.get(HttpService.SERVICE_PATH + 'farms', {headers: this.headers})
        .pipe(map(response => <Farm[]>response));
  }

  getFarmByFarmSeq(farmSeq: number): Observable<Farm> {
    return this.http.get(HttpService.SERVICE_PATH + 'farms/find/' + farmSeq, {headers: this.headers})
        .pipe(map(response => <Farm>response));
  }

  getAllFarmsByUserSeqAndStatus(): Observable<Farm[]> {
    return this.http.get(HttpService.SERVICE_PATH + 'farms/findAllFarmsByUserSeq', {headers: this.headers})
        .pipe(map(response => <Farm[]>response));
  }
}
