import { Component, OnInit } from '@angular/core';
import {MatTabChangeEvent} from '@angular/material';

@Component({
  selector: 'app-body-mass-index',
  templateUrl: './body-mass-index.component.html',
  styleUrls: ['./body-mass-index.component.scss']
})
export class BodyMassIndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onTabChange(event: MatTabChangeEvent) {
    // if (event.tab.textLabel === 'Farm Search') {
    //   //  this.bankSearchComponent.loadData();
    // }
  }

}
