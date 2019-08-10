import {Component, Input, OnInit} from '@angular/core';
import {LoginData} from '../../authentication/login-data';
import {AuthenticationService} from '../../authentication/authentication.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() loginData: LoginData;
  invalidLogin: boolean;

  constructor(private authService: AuthenticationService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    if (this.loginData == null) {
      this.loginData = new LoginData();
    }
  }

  login() {
    if (this.authService.authenticate(this.loginData)) {

      // console.log(this.authService.authenticate(this.loginData));
      // this.router.navigate(['/dashboard']);
      this.router.navigate(['dashboard']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
      console.log('aaaaaaaaaaaaaaaaaaaa chathura')

    }
  }

}
