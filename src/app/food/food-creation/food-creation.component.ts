import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Food} from '../food';
import {NgForm} from '@angular/forms';
import {FoodService} from '../food.service';
import {MatSnackBar} from '@angular/material';
import {take} from 'rxjs/operators';

@Component({
    selector: 'app-food-creation',
    templateUrl: './food-creation.component.html',
    styleUrls: ['./food-creation.component.scss']
})
export class FoodCreationComponent implements OnInit {

    @Input() food: Food;
    @Input() isUpdate: Boolean;
    @Input() isNew: Boolean;
    @ViewChild('foodForm', {static: true}) foodForm: NgForm;
    @Input() statusList: any[];
    @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
    @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();

    constructor(private foodService: FoodService,
                private snackBar: MatSnackBar) {
    }

    ngOnInit() {
        if (this.food == null) {
            this.food = new Food();
            this.isUpdate = false;
            this.isNew = false;
        }
    }

    saveFood(): void {
        this.foodService.postFood(this.food).pipe(take(1)).subscribe(food => {
                this.food = food;
                this.snackBar.open('Food Saved', 'success', {
                    duration: 3000
                });
                this.isUpdate = true;
                this.isNew = true;
            },
            error => {
                this.snackBar.open(error.error, 'success', {
                    duration: 3000
                });
            }
        )
    }

    updateFood(): void {
        this.foodService.putFood(this.food).pipe(take(1)).subscribe(food => {
            this.food = food;
            this.snackBar.open('Food Updated', 'success', {
                duration: 3000
            });
        });
    }

    deleteFood(): void {
        const foodSeq = this.food.foodSeq;
        this.foodService.deleteFood(this.food).pipe(take(1)).subscribe(food => {
            this.food = new Food();
            this.snackBar.open('Food Deleted', 'success', {
                duration: 3000
            });
            this.isUpdate = false;
            this.isNew = true;
            this.resetForm();
            this.onDelete.emit(foodSeq);
        });
    }

    resetForm() {
        this.foodForm.resetForm();
    }
}
