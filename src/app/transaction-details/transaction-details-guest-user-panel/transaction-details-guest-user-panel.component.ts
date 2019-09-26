import {Component, Input, OnInit} from '@angular/core';
import {Location} from '../../location/location';
import {TransactionDetails} from '../transaction-details';
import {User} from '../../session/guest-user-creation/user';
import {FarmService} from '../../farm/farm.service';
import {BodyMassIndexService} from '../../body-mass-index/body-mass-index.service';
import {TransactionDetailsService} from '../transaction-details.service';
import {Farm} from '../../farm/farm';
import {take} from 'rxjs/operators';
import * as moment from 'moment';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/observable/interval';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/publishReplay';

@Component({
  selector: 'app-transaction-details-guest-user-panel',
  templateUrl: './transaction-details-guest-user-panel.component.html',
  styleUrls: ['./transaction-details-guest-user-panel.component.scss']
})
export class TransactionDetailsGuestUserPanelComponent implements OnInit {
  locationList: Location[];
  @Input() transactionDetails: TransactionDetails;
  @Input() transactionSeq: any;
  @Input() status: any;
  @Input() user: User;
  farm: Farm;
  deliveryDate: boolean;
  // @ViewChild('farmDetailsForm', {static: true}) farmDetailsForm: NgForm;
  foodList: any[];
  farmList: any[];
  clock: Observable<any>;
  days: any;
  hours: any;
  minutes: any;
  seconds: any;


  constructor(
      private farmService: FarmService,
      private bodyMassIndexService: BodyMassIndexService,
      private transactionDetailsService: TransactionDetailsService,
  ) {
  }

  ngOnInit() {

    if (this.farm === null) {
      this.farm = new Farm();
    }
    if (this.transactionDetails === null) {
      this.transactionDetails = new TransactionDetails();
    }


    const toArray = this.transactionSeq.split('/');
    this.transactionDetailsService.findTransactionDetails(Number(toArray[0])).subscribe((transactionDetails: TransactionDetails) => {
      this.transactionDetails = transactionDetails;
      const orderDate: number = moment(this.transactionDetails.transporterPickDate, 'DD-MM-YYYY HH:mm:ss').valueOf();
      const recivedDate: number = moment(this.transactionDetails.supermarketReceivedDate, 'DD-MM-YYYY HH:mm:ss').valueOf();
      this.clock = Observable
          .interval(1000)
          .map(() => {
            return recivedDate - orderDate;
          })
          .map((millis: number) => {
            return moment.duration(millis);
          })
          .publishReplay(1).refCount(); // so that calculation is performed once no matter how many subscribers

      this.days = this.clock.map(date => date.days());
      this.hours = this.clock.map(date => date.hours());
      this.minutes = this.clock.map(date => date.minutes());
      this.seconds = this.clock.map(date => date.seconds());
      this.getFarmDetails(this.transactionDetails);
    });


  }


  getFarmDetails(trans: TransactionDetails) {
    this.farmService.getFarmByFarmSeq(trans.farmSeq).pipe(take(1)).subscribe(
        response => this.farm = response
    );
  }

}
