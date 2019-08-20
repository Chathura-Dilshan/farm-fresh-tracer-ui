import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';


import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';

import {AppComponent} from './app.component';
import {AgmCoreModule} from '@agm/core';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {LoginComponent} from './session/login/login.component';
import {AuthenticationService} from './authentication/authentication.service';
import {MatFormFieldModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGaurdService} from './authentication/auth-gaurd.service';
import {HttpService} from './authentication/http.service';
import { GuestUserCreationComponent } from './session/guest-user-creation/guest-user-creation.component';
import {QRCodeModule} from 'angularx-qrcode';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatSnackBarModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLayoutComponent,
    GuestUserCreationComponent

  ],
  providers: [
    AuthenticationService,
    AuthGaurdService,
    HttpService
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
