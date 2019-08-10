import { Component, OnInit } from '@angular/core';
import {MatTabChangeEvent} from '@angular/material';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onTabChange(event: MatTabChangeEvent) {
    if (event.tab.textLabel === 'Vehicle Search') {
      //  this.bankSearchComponent.loadData();
    }
  }

}
