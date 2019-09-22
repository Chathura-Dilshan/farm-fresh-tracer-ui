import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';
import {FoodService} from '../../food/food.service';
import {UserCreationService} from '../../session/guest-user-creation/user-creation.service';
import {MatSnackBar} from '@angular/material';
import {TransactionDetails} from '../transaction-details';
import {TransactionDetailsService} from '../transaction-details.service';
import {FarmService} from '../../farm/farm.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-transaction-details-farm-details',
  templateUrl: './transaction-details-farm-details.component.html',
  styleUrls: ['./transaction-details-farm-details.component.scss']
})
export class TransactionDetailsFarmDetailsComponent implements OnInit {
  public myAngularxQrCode: string = null;
  @Input() transactionDetails: TransactionDetails;
  @ViewChild('farmDetailsForm', {static: true}) farmDetailsForm: NgForm;
  foodList: any[];
  farmList: any[];

  constructor(
      private transactionDetailsService: TransactionDetailsService,
      private foodService: FoodService,
      private farmService: FarmService,
      private userService: UserCreationService,
      private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    if (this.transactionDetails == null) {
      this.transactionDetails = new TransactionDetails();
    }


    this.farmService.getAllFarmsByUserSeqAndStatus().pipe(take(1)).subscribe(
        response => this.farmList = response
    );
  }


  addTransactionDetailsDetails(): void {
    // FARM
    this.transactionDetails.currentStatus = 1;
    this.transactionDetailsService.postTransactionDetails(this.transactionDetails).pipe(take(1)).subscribe(transactionDetails => {
          this.transactionDetails = transactionDetails;
          this.myAngularxQrCode = String(this.transactionDetails.transactionDetailsSeq);
          // this.myAngularxQrCode = String(this.transactionDetails.transactionDetailsSeq + '/' + this.transactionDetails.currentStatus);
          this.snackBar.open('QR Generated success', 'success', {
            duration: 3000
          });
        },
        error => {
          this.snackBar.open(error.error, 'success', {
            duration: 3000
          });
        }
    )
  }

  resetForm() {
    this.farmDetailsForm.resetForm();
    this.transactionDetails.transactionDetailsSeq = null;

  }

}
