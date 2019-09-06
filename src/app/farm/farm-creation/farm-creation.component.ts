import {Component, Input, OnInit} from '@angular/core';
import {Farm} from '../farm';
import {FarmService} from '../../farm/farm.service';
import {take} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';
import {FoodService} from '../../food/food.service';
import {UserCreationService} from '../../session/guest-user-creation/user-creation.service';

@Component({
  selector: 'app-farm-creation',
  templateUrl: './farm-creation.component.html',
  styleUrls: ['./farm-creation.component.scss']
})
export class FarmCreationComponent implements OnInit {

  @Input() farm: Farm;
  foodList: any[];
  userList: any[];

  constructor(
      private farmService: FarmService,
      private foodService: FoodService,
      private userService: UserCreationService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    if (this.farm == null) {
      this.farm = new Farm();
    }

    this.foodService.getFoods().pipe(take(1)).subscribe(
        response => this.foodList = response
    );
    this.userService.getUsers().pipe(take(1)).subscribe(
        response => this.userList = response
    );
  }

  saveFarm(): void {
    this.farmService.postFarm(this.farm).pipe(take(1)).subscribe(farm => {
          this.farm = farm;
          this.snackBar.open('Farm Saved', 'success', {
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
