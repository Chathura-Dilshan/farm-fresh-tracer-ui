import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import BarcodeFormat from '../sheard/BarcodeFormat';
import {TransactionDetailsService} from '../transaction-details/transaction-details.service';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss']
})
export class QrScannerComponent implements OnInit {
  allowedFormats;
  @Output() transactionIds = new EventEmitter<any>();
  @Output() status = new EventEmitter<any>();
  status2: any;

  constructor(
      private transactionDetailsService: TransactionDetailsService,
  ) {
  }

  ngOnInit() {


    this.allowedFormats = [
      BarcodeFormat.QR_CODE,
      BarcodeFormat.EAN_13,
      BarcodeFormat.CODE_128,
      BarcodeFormat.DATA_MATRIX,
      BarcodeFormat.AZTEC,
      BarcodeFormat.CODABAR,
      BarcodeFormat.CODE_39,
      BarcodeFormat.CODE_93,
      BarcodeFormat.DATA_MATRIX,
      BarcodeFormat.EAN_8,
      BarcodeFormat.ITF,
      BarcodeFormat.PDF_417,
      BarcodeFormat.RSS_14,
      BarcodeFormat.UPC_A,
      BarcodeFormat.MAXICODE,
      BarcodeFormat.UPC_E,
      BarcodeFormat.UPC_EAN_EXTENSION,
      BarcodeFormat.RSS_EXPANDED
    ];
  }

  scanErrorHandler(event) {
    console.log(event);
  }

  handleQrCodeResult(selectedValue: string) {
    alert(selectedValue);
    // this.router.navigate(['farm']);
    const toArray = selectedValue.split('/');

    this.transactionDetailsService.findTransactionDetails(Number(toArray[0])).subscribe(transactionDetails => {
      this.transactionIds.emit(selectedValue);
      this.status.emit(transactionDetails.currentStatus.toString());
    });
  }

}
