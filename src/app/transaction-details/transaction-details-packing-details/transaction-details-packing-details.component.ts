import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';
import {LocationService} from '../../location/location.service';
import {TransactionDetails} from '../transaction-details';
import {NgForm} from '@angular/forms';
import {Location} from '../../location/location';
import {TransactionDetailsService} from '../transaction-details.service';
import {FoodService} from '../../food/food.service';
import {FarmService} from '../../farm/farm.service';
import {UserCreationService} from '../../session/guest-user-creation/user-creation.service';
import {MatSnackBar} from '@angular/material';
import {User} from '../../session/guest-user-creation/user';

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
    @Input() user: User;
    deliveryDate: boolean;
    @ViewChild('farmDetailsForm', {static: true}) farmDetailsForm: NgForm;
    foodList: any[];
    farmList: any[];

    constructor(private locationService: LocationService,
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

        this.locationService.getAllLocationsByUserSeqAndStatus().pipe(take(1)).subscribe(
            response => this.locationList = response
        );

        if (this.user.userType === 'SUPERMARKET_HELPER') {
            this.deliveryDate = true;
        }
    }

    saveTransporterDetails(): void {
        // PACKING
        const toArray = this.transactionSeq.split('/');

        this.transactionDetailsService.findTransactionDetails(Number(toArray[0])).subscribe((transactionDetails: TransactionDetails) => {
            transactionDetails.transactionDetailsSeq = Number(toArray[0]);
            if (this.user.userType === 'PACKING_HELPER') {
                transactionDetails.packingLocationSeq = this.transactionDetails.packingLocationSeq;
                transactionDetails.packingReceivedDate = this.transactionDetails.packingReceivedDate;
                transactionDetails.packingDeliveredDate = this.transactionDetails.packingDeliveredDate;
                transactionDetails.currentStatus = 3;
            }

            if (this.user.userType === 'WAREHOUSE_HELPER') {
                transactionDetails.warehouseLocationSeq = this.transactionDetails.packingLocationSeq;
                transactionDetails.warehouseReceivedDate = this.transactionDetails.packingReceivedDate;
                transactionDetails.warehouseDeliveredDate = this.transactionDetails.packingDeliveredDate;
                transactionDetails.currentStatus = 4;
            }

            if (this.user.userType === 'SUPERMARKET_HELPER') {
                transactionDetails.supermarketLocationSeq = this.transactionDetails.packingLocationSeq;
                transactionDetails.supermarketReceivedDate = this.transactionDetails.packingReceivedDate;
                transactionDetails.currentStatus = 5;
            }


            this.transactionDetailsService.putTransactionDetails(transactionDetails).pipe(take(1)).subscribe(transactionDetail => {
                    this.transactionDetails = transactionDetail;
                    // this.myAngularxQrCode = String(this.transactionDetails.transactionDetailsSeq + '/' + this.transactionDetails.currentStatus);
                    this.snackBar.open('Packing details success', 'success', {
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
