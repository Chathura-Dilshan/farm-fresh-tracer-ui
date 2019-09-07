import {Component, Input, OnInit} from '@angular/core';
import {FoodService} from '../../food/food.service';
import {UserCreationService} from '../../session/guest-user-creation/user-creation.service';
import {MatSnackBar} from '@angular/material';
import {take} from 'rxjs/operators';
import {BodyMassIndex} from '../body-mass-index';
import {BodyMassIndexService} from '../body-mass-index.service';

@Component({
  selector: 'app-body-mass-index-creation',
  templateUrl: './body-mass-index-creation.component.html',
  styleUrls: ['./body-mass-index-creation.component.scss']
})
export class BodyMassIndexCreationComponent implements OnInit {

  @Input() bodyMassIndex: BodyMassIndex;
  foodList: any[];
  userList: any[];


  constructor(
      private bodyMassIndexService: BodyMassIndexService,
      private foodService: FoodService,
      private userService: UserCreationService,
      private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    if (this.bodyMassIndex == null) {
      this.bodyMassIndex = new BodyMassIndex();
    }

    this.foodService.getFoods().pipe(take(1)).subscribe(
        response => this.foodList = response
    );
    this.userService.getUsers().pipe(take(1)).subscribe(
        response => this.userList = response
    );
  }

  saveBodyMassIndex(): void {
    this.bodyMassIndexService.postBodyMassIndex(this.bodyMassIndex).pipe(take(1)).subscribe(bodyMassIndex => {
          this.bodyMassIndex = bodyMassIndex;



          this.snackBar.open('Body Mass Index Saved', 'success', {
            duration: 3000
          });
        },
        error => {
          this.snackBar.open(error.error, 'error', {
            duration: 3000
          });

        }
    )
  }

}
