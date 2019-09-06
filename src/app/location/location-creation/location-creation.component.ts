import {Component, Input, OnInit} from '@angular/core';
import {Location} from '../../location/location';
import {LocationService} from '../../location/location.service';
import {FoodService} from '../../food/food.service';
import {UserCreationService} from '../../session/guest-user-creation/user-creation.service';
import {MatSnackBar} from '@angular/material';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-location-creation',
  templateUrl: './location-creation.component.html',
  styleUrls: ['./location-creation.component.scss']
})
export class LocationCreationComponent implements OnInit {
  @Input() location: Location;
  foodList: any[];
  userList: any[];

  constructor(
      private locationService: LocationService,
      private foodService: FoodService,
      private userService: UserCreationService,
      private snackBar: MatSnackBar) { }

  ngOnInit() {
    if (this.location == null) {
      this.location = new Location();
    }
    this.userService.getUsers().pipe(take(1)).subscribe(
        response => this.userList = response
    );
  }

  saveLocation(): void {
    this.locationService.postLocation(this.location).pipe(take(1)).subscribe(location => {
          this.location = location;
          this.snackBar.open('Location Saved', 'success', {
            duration: 3000
          });
        },
        error => {
          this.snackBar.open(error.error, 'success', {
            duration: 3000
          });
        }
    )
  }
}
