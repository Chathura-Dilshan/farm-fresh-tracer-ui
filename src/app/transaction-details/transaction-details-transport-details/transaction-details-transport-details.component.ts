import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TransactionDetails} from '../transaction-details';
import {NgForm} from '@angular/forms';
import {TransactionDetailsService} from '../transaction-details.service';
import {FoodService} from '../../food/food.service';
import {FarmService} from '../../farm/farm.service';
import {UserCreationService} from '../../session/guest-user-creation/user-creation.service';
import {MatSnackBar} from '@angular/material';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-transaction-details-transport-details',
  templateUrl: './transaction-details-transport-details.component.html',
  styleUrls: ['./transaction-details-transport-details.component.scss']
})
export class TransactionDetailsTransportDetailsComponent implements OnInit {

  public myAngularxQrCode: string = null;
  @Input() transactionDetails: TransactionDetails;
  @Input() transactionSeq: any;
  @Input() status: any;
  @ViewChild('farmDetailsForm', {static: true}) farmDetailsForm: NgForm;
  foodList: any[];
  farmList: any[];

  constructor(
      private transactionDetailsService: TransactionDetailsService,
      private foodService: FoodService,
      private farmService: FarmService,
      private userService: UserCreationService,
      private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    if (this.transactionDetails == null) {
      this.transactionDetails = new TransactionDetails();
    }

    // alert(this.transactionSeq);
    // alert(this.status);

    this.farmService.getAllFarmsByUserSeqAndStatus().pipe(take(1)).subscribe(
        response => this.farmList = response
    );
  }


  saveTransporterDetails(): void {
    // TRANSPORTER
    const toArray = this.transactionSeq.split('/');

    this.transactionDetailsService.findTransactionDetails(Number(toArray[0])).subscribe((transactionDetails:TransactionDetails) => {


      transactionDetails.transactionDetailsSeq = Number(toArray[0]);
      transactionDetails.vehicleNo = this.transactionDetails.vehicleNo;
      transactionDetails.vehicleType = this.transactionDetails.vehicleType;
      transactionDetails.transporterPickDate = this.transactionDetails.transporterPickDate;
      transactionDetails.transporterDeliveredDate = this.transactionDetails.transporterDeliveredDate;
      transactionDetails.currentStatus = 2;
      this.transactionDetailsService.putTransactionDetails(transactionDetails).pipe(take(1)).subscribe(transactionDetail => {
            this.transactionDetails = transactionDetail;
            this.myAngularxQrCode = String(this.transactionDetails.transactionDetailsSeq + '/' + this.transactionDetails.currentStatus);
            this.snackBar.open('Transporter success', 'success', {
              duration: 3000
            });
          },
          error => {
            this.snackBar.open(error.error, 'warn', {
              duration: 3000
            });
          }
      )

    });


  }

  resetForm() {
    this.farmDetailsForm.resetForm();
    this.transactionDetails.transactionDetailsSeq = null;

  }

}
