import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Food} from './food';
import {HttpService} from '../authentication/http.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class FoodService {
    headers = new HttpHeaders({Authorization: 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))});

    constructor(private http: HttpClient) {
    }


    postFood(food: Food): Observable<Food> {
        return this.http.post(HttpService.SERVICE_PATH + 'foods', food, {headers: this.headers})
            .pipe(map(response => <Food>response));
    }

    putFood(food: Food): Observable<Food> {
        return this.http.put(HttpService.SERVICE_PATH + 'food', food, {headers: null})
            .pipe(map(response => <Food>response));
    }

    deleteFood(food: Food): Observable<Food> {
        return this.http.delete(HttpService.SERVICE_PATH + 'foods/' + food.foodSeq, {headers: null})
            .pipe(map(response => <Food>response));
    }

    getFoods(): Observable<Food[]> {
        return this.http.get(HttpService.SERVICE_PATH + 'foods', {headers: null})
            .pipe(map(response => <Food[]>response));
    }

}
