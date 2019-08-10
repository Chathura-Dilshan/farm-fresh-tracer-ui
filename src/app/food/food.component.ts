import { Component, OnInit } from '@angular/core';
import {MatTabChangeEvent} from '@angular/material';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onTabChange(event: MatTabChangeEvent) {
    if (event.tab.textLabel === 'Food Search') {
      //  this.bankSearchComponent.loadData();
    }
  }
}
