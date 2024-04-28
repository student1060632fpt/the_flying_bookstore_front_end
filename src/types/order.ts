interface ILeaseOrderDetail {
  id: number;
  listingId: number;
  leaseRate: number;
  depositFee: number;
  penaltyRate: number;
}
export type IOrderStatus =
  | "ORDERED_PAYMENT_PENDING"
  | "CANCELED"
  | "PAYMENT_SUCCESS"
  | "DELIVERED"
  | "LATE_RETURN"
  | "RETURNING"
  | "RETURNED"
  | "DEPOSIT_RETURNED"
  | "PAID_OWNER";
export type IPaymentMethod = "COD" | "BANK_TRANSFER" | "VNPAY";
export interface IOrder {
  id: number;
  listingId: number;
  status: IOrderStatus;
  lessorId: number;
  lesseeId: number;
  lessorAddress: string;
  lesseeAddress: string;
  fromDate: string;
  toDate: string;
  receiveDate: string | null;
  returnDate: string | null;
  totalLeaseFee: number;
  totalPenaltyRate: number;
  totalDeposit: number;
  paymentMethod: IPaymentMethod;
  imageLink: string | null;
  depositPaymentId: number | null;
  refundPaymentId: number | null;
  payOwnerPaymentId: number | null;
  createdDate: string | null;
  updatedDate: string | null;
  deletedDate: string | null;
  leaseOrderDetails: ILeaseOrderDetail[];
  reviews: any[]; // You might want to replace 'any' with a specific review type if available
}
