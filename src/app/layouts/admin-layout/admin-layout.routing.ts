import {Routes} from '@angular/router';

import {DashboardComponent} from '../../dashboard/dashboard.component';
import {UserProfileComponent} from '../../user-profile/user-profile.component';
import {TableListComponent} from '../../table-list/table-list.component';
import {TypographyComponent} from '../../typography/typography.component';
import {IconsComponent} from '../../icons/icons.component';
import {MapsComponent} from '../../maps/maps.component';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {UpgradeComponent} from '../../upgrade/upgrade.component';
import {VehicleComponent} from '../../vehicle/vehicle.component';
import {FoodComponent} from '../../food/food.component';
import {FarmComponent} from '../../farm/farm.component';
import {AuthGaurdService} from '../../authentication/auth-gaurd.service';
import {RoleCreationComponent} from '../../session/role/role-creation/role-creation.component';
import {UserCretionComponent} from '../../session/user/user-cretion/user-cretion.component';
import {LocationComponent} from '../../location/location.component';
import {BodyMassIndexComponent} from '../../body-mass-index/body-mass-index.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //     path: '',
    //     children: [{
    //         path: 'dashboard',
    //         component: DashboardComponent
    //     }]
    // },
    // {
    //     path: '',
    //     children: [{
    //         path: 'userprofile',
    //         component: UserProfileComponent
    //     }]
    // },
    // {
    //     path: '',
    //     children: [{
    //         path: 'icons',
    //         component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [{
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [{
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [{
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [{
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // },

    // {path: '', component: DashboardComponent},
    {path: 'dashboard', canActivate: [AuthGaurdService], component: DashboardComponent},
    // {path: 'user-profile', canActivate: [AuthGaurdService], component: UserProfileComponent},
    // {path: 'vehicle', canActivate: [AuthGaurdService], component: VehicleComponent},
    {path: 'food', canActivate: [AuthGaurdService], component: FoodComponent},
    {path: 'farm', canActivate: [AuthGaurdService], component: FarmComponent},
    {path: 'role', canActivate: [AuthGaurdService], component: RoleCreationComponent},
    {path: 'user', canActivate: [AuthGaurdService], component: UserCretionComponent},
    {path: 'location', canActivate: [AuthGaurdService], component: LocationComponent},
    {path: 'bodyMassIndex', canActivate: [AuthGaurdService], component: BodyMassIndexComponent},
    // {path: 'table-list', component: TableListComponent},
    // {path: 'typography', component: TypographyComponent},
    // {path: 'icons', component: IconsComponent},
    // {path: 'maps', component: MapsComponent},
    // {path: 'notifications', component: NotificationsComponent},
    // {path: 'upgrade', component: UpgradeComponent},
];
