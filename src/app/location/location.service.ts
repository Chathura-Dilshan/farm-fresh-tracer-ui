import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Location} from '../location/location';
import {Observable} from 'rxjs';
import {HttpService} from '../authentication/http.service';
import {map} from 'rxjs/operators';

@Injectable()
export class LocationService {

    headers = new HttpHeaders({Authorization: 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))});

    constructor(private http: HttpClient) {
    }


    postLocation(location: Location): Observable<Location> {
        return this.http.post(HttpService.SERVICE_PATH + 'locations', location, {headers: this.headers})
            .pipe(map(response => <Location>response));
    }

    putLocation(location: Location): Observable<Location> {
        return this.http.put(HttpService.SERVICE_PATH + 'locations', location, {headers: null})
            .pipe(map(response => <Location>response));
    }

    deleteLocation(location: Location): Observable<Location> {
        return this.http.delete(HttpService.SERVICE_PATH + 'locations/' + location.locationSeq, {headers: null})
            .pipe(map(response => <Location>response));
    }

    getLocations(): Observable<Location[]> {
        return this.http.get(HttpService.SERVICE_PATH + 'locations', {headers: this.headers})
            .pipe(map(response => <Location[]>response));
    }

    getAllLocationsByUserSeqAndStatus(): Observable<Location[]> {
        return this.http.get(HttpService.SERVICE_PATH + 'Locations/findAllLocationsByUserSeq', {headers: this.headers})
            .pipe(map(response => <Location[]>response));
    }
}
