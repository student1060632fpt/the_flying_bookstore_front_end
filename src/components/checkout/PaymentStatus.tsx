import { IOrderStatus, IPaymentMethod } from "../../types/order";

const renderStatus = (status?: IOrderStatus | undefined) => {
  if (!status) return <></>;
  switch (status) {
    case "PAYMENT_SUCCESS":
      return <>Chờ lấy hàng</>;
    case "ORDERED_PAYMENT_PENDING":
      return <>Chờ thanh toán</>;
    default:
      return <>Chưa định nghĩa</>;
  }
};
const renderPayment = (method?: IPaymentMethod | undefined) => {
  if (!method) return <></>;
  switch (method) {
    case "BANK_TRANSFER":
      return <>Chuyển khoản</>;
    case "COD":
      return <>COD</>;
    case "VNPAY":
      return <>VnPay</>;
    default:
      return <>Lỗi tí</>;
  }
};
export {renderPayment,renderStatus}