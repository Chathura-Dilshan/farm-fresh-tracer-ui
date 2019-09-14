import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';
import {LocationService} from '../../location/location.service';
import {TransactionDetails} from '../transaction-details';
import {NgForm} from '@angular/forms';
import {Location} from '../../location/location';

@Component({
  selector: 'app-transaction-details-packing-details',
  templateUrl: './transaction-details-packing-details.component.html',
  styleUrls: ['./transaction-details-packing-details.component.scss']
})
export class TransactionDetailsPackingDetailsComponent implements OnInit {
 locationList: Location[];
  @Input() transactionDetails: TransactionDetails;
  @Input() transactionSeq: any;
  @Input() status: any;
  @ViewChild('farmDetailsForm', {static: true}) farmDetailsForm: NgForm;
  foodList: any[];
  farmList: any[];

  constructor(private locationService: LocationService) { }

  ngOnInit() {

    this.locationService.getAllLocationsByUserSeqAndStatus().pipe(take(1)).subscribe(
        response => this.locationList = response
    );
  }

}
