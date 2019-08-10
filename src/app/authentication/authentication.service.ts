import {Injectable} from '@angular/core';
import {LoginData} from './login-data';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {HttpService} from './http.service';
import {map} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class AuthenticationService {

    logData: any;
    auth: any[] = [];
    private userAuthorityList: string[];


    constructor(private router: Router,
                private http: HttpClient,
                private httpService: HttpService,
                private snackBar: MatSnackBar) {
        // localStorage.removeItem('username');
    }

    public authenticate(loginData: LoginData) {

        // const headers = new HttpHeaders({
        //   'Access-Control-Allow-Origin' : 'http://localhost:4200/'
        // });
        const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(loginData.username + ':' + loginData.password)});

        return this.http.post(HttpService.SERVICE_PATH + 'users/login', loginData, {headers: headers})
            .pipe(map(res => res))
            .subscribe(
                data => {
                    this.logData = data;
                    if (data == null) {
                        localStorage.clear();
                        this.router.navigate(['login']);
                        this.snackBar.open('Username or password invalid', 'Error', {
                            duration: 3000,
                            panelClass: ['red-snackbar'],
                            verticalPosition: 'top'
                        });

                        return false;
                    } else {
                        console.log(data);
                        localStorage.setItem('username', loginData.username);


                        for (const argument of this.logData.roles) {
                            if (this.auth.indexOf(argument) === -1) {
                                this.auth.push(argument.role_name);
                            }

                        }

                        console.log(this.auth);
                        localStorage.setItem('authorityList', JSON.stringify(this.auth));
                        this.router.navigate(['dashboard']);
                        return true;
                    }


                },
                err => {
                    localStorage.clear();
                    this.router.navigate(['login']);
                    this.snackBar.open('Username or password invalid', 'Error', {
                        duration: 3000,
                        panelClass: ['red-snackbar'],
                        verticalPosition: 'top'
                    });

                    return false;
                }
            );

    }

    isUserLoggedIn() {
        const user = localStorage.getItem('username');
        if (!(user === null)) {
            return true;
        } else {
            return false;
        }
    }

    logout() {
        localStorage.clear();
    }


}