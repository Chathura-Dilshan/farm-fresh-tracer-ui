import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpService} from '../../authentication/http.service';
import {map} from 'rxjs/operators';
import {User} from './user';
import {Food} from '../../food/food';

@Injectable()
export class UserCreationService {
  headers = new HttpHeaders({Authorization: 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))});

  constructor(private http: HttpClient) {
  }


  postUser(user: User): Observable<User> {
    return this.http.post(HttpService.SERVICE_PATH + 'users', user, {headers: this.headers})
        .pipe(map(response => <User>response));
  }

  getUsers(): Observable<User[]> {
    return this.http.get(HttpService.SERVICE_PATH + 'users', {headers: this.headers})
        .pipe(map(response => <User[]>response));
  }
}
