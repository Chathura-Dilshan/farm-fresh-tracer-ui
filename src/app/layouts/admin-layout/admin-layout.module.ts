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
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
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
import {BodyMassIndexComponent} from '../../body-mass-index/body-mass-index.component';
import {BodyMassIndexCreationComponent} from '../../body-mass-index/body-mass-index-creation/body-mass-index-creation.component';
import {TransactionDetailsComponent} from '../../transaction-details/transaction-details.component';
import {TransactionDetailsFarmDetailsComponent} from '../../transaction-details/transaction-details-farm-details/transaction-details-farm-details.component';
import {TransactionDetailsTransportDetailsComponent} from '../../transaction-details/transaction-details-transport-details/transaction-details-transport-details.component';
import {TransactionDetailsPackingDetailsComponent} from '../../transaction-details/transaction-details-packing-details/transaction-details-packing-details.component';
import {TransactionDetailsWarehouseDetailsComponent} from '../../transaction-details/transaction-details-warehouse-details/transaction-details-warehouse-details.component';
import {TransactionDetailsSupermarketDetailsComponent} from '../../transaction-details/transaction-details-supermarket-details/transaction-details-supermarket-details.component';
import {GuestUserCreationDialogComponent} from '../../session/login/login.component';
import {QrScannerComponent} from '../../qr-scanner/qr-scanner.component';

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
        NgxMatSelectSearchModule,
        MatRadioModule
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
        LocationCreationComponent,
        BodyMassIndexComponent,
        BodyMassIndexCreationComponent,
        TransactionDetailsComponent,
        TransactionDetailsFarmDetailsComponent,
        TransactionDetailsTransportDetailsComponent,
        TransactionDetailsPackingDetailsComponent,
        TransactionDetailsWarehouseDetailsComponent,
        TransactionDetailsSupermarketDetailsComponent,
        QrScannerComponent
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
