import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpService} from '../authentication/http.service';
import {map} from 'rxjs/operators';
import {TransactionDetails} from './transaction-details';
import {User} from '../session/guest-user-creation/user';

@Injectable({
  providedIn: 'root'
})
export class TransactionDetailsService {

  headers = new HttpHeaders({Authorization: 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))});

  constructor(private http: HttpClient) {
  }


  postTransactionDetails(transactionDetails: TransactionDetails): Observable<TransactionDetails> {
    return this.http.post(HttpService.SERVICE_PATH + 'transactionDetails', transactionDetails, {headers: this.headers})
        .pipe(map(response => <TransactionDetails>response));
  }

  putTransactionDetails(transactionDetails: TransactionDetails): Observable<TransactionDetails> {
    return this.http.put(HttpService.SERVICE_PATH + 'transactionDetails', transactionDetails, {headers: this.headers})
        .pipe(map(response => <TransactionDetails>response));
  }


  findTransactionDetails(transactionSeq: number): Observable<TransactionDetails> {
    return this.http.get(HttpService.SERVICE_PATH + 'transactionDetails/' + transactionSeq, {headers: this.headers})
        .pipe(map(response => <TransactionDetails>response));
  }
}
