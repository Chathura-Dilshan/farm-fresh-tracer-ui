import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../authentication/authentication.service';

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    {path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: ''},
    {path: 'user-profile', title: 'User Profile', icon: 'person', class: ''},
    {path: 'vehicle', title: 'Vehicle', icon: 'directions_car', class: ''},
    {path: 'food', title: 'Food', icon: 'fastfood', class: ''},
    {path: 'farm', title: 'Farm', icon: 'spa', class: ''},
    // { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];

    constructor(private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);


    }

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
