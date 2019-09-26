export class TransactionDetails {
    transactionDetailsSeq: number;
    farmSeq: number;
    note: string;
    qrGenerateDate: Date;

    vehicleNo: string;
    vehicleType: string;
    transporterPickDate: Date;
    transporterDeliveredDate: Date;

    packingReceivedDate: Date;
    packingDeliveredDate: Date;
    packingLocationSeq: number;

    warehouseReceivedDate: Date;
    warehouseDeliveredDate: Date;
    warehouseLocationSeq: number;

    supermarketReceivedDate: Date;
    supermarketLocationSeq: number;
    currentStatus: number;
}
