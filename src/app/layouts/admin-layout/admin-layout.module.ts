import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {UserProfileComponent} from '../../user-profile/user-profile.component';

import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatSelectModule, MatSnackBarModule,
  MatTabsModule,
  MatTooltipModule
} from '@angular/material';
import {VehicleComponent} from '../../vehicle/vehicle.component';
import {VehicleCreationComponent} from '../../vehicle/vehicle-creation/vehicle-creation.component';
import {VehicleSearchComponent} from '../../vehicle/vehicle-search/vehicle-search.component';
import {FoodCreationComponent} from '../../food/food-creation/food-creation.component';
import {FoodComponent} from '../../food/food.component';
import {FoodSearchComponent} from '../../food/food-search/food-search.component';
import {FarmCreationComponent} from '../../farm/farm-creation/farm-creation.component';
import {FarmSearchComponent} from '../../farm/farm-search/farm-search.component';
import {FarmComponent} from '../../farm/farm.component';
import {UpgradeComponent} from '../../upgrade/upgrade.component';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {MapsComponent} from '../../maps/maps.component';
import {IconsComponent} from '../../icons/icons.component';
import {TypographyComponent} from '../../typography/typography.component';
import {TableListComponent} from '../../table-list/table-list.component';
import {QRCodeModule} from 'angularx-qrcode';
import {NgxPrintModule} from 'ngx-print';
import {FoodService} from '../../food/food.service';
import {ZXingScannerModule} from '@zxing/ngx-scanner';
import {RoleCreationComponent} from '../../session/role/role-creation/role-creation.component';
import {RoleService} from '../../session/role/role.service';
import {UserCretionComponent} from '../../session/user/user-cretion/user-cretion.component';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {LocationComponent} from '../../location/location.component';
import {LocationCreationComponent} from '../../location/location-creation/location-creation.component';
import {LocationService} from '../../location/location.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTabsModule,
    MatCardModule,
    QRCodeModule,
    NgxPrintModule,
    ZXingScannerModule,
    NgxMatSelectSearchModule
  ],
  declarations: [
    UserProfileComponent,
    VehicleComponent,
    VehicleCreationComponent,
    VehicleSearchComponent,
    FoodCreationComponent,
    FoodComponent,
    FoodSearchComponent,
    FarmCreationComponent,
    FarmSearchComponent,
    FarmComponent,
    DashboardComponent,
    RoleCreationComponent,
    UserCretionComponent,
    LocationComponent,
    LocationCreationComponent
    // TableListComponent,
    // TypographyComponent,
    // IconsComponent,
    // MapsComponent,
    // NotificationsComponent,
    // UpgradeComponent
  ],
  providers: [
      FoodService,
      RoleService,
      LocationService
  ]
})

export class AdminLayoutModule {
}
