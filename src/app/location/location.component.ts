import { Component, OnInit } from '@angular/core';
import {MatTabChangeEvent} from '@angular/material';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onTabChange(event: MatTabChangeEvent) {
    // if (event.tab.textLabel === 'Farm Search') {
    //   //  this.bankSearchComponent.loadData();
    // }
  }

}
