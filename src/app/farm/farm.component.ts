import { Component, OnInit } from '@angular/core';
import {MatTabChangeEvent} from '@angular/material';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.scss']
})
export class FarmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onTabChange(event: MatTabChangeEvent) {
    if (event.tab.textLabel === 'Farm Search') {
      //  this.bankSearchComponent.loadData();
    }
  }
}
