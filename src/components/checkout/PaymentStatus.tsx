import { IOrderStatus, IPaymentMethod } from "../../types/order";

const renderStatus = (status?: IOrderStatus | undefined) => {
  if (!status) return <></>;
  switch (status) {
    case "PAYMENT_SUCCESS":
      return <>Chờ lấy hàng</>;
    case "ORDERED_PAYMENT_PENDING":
      return <>Chờ thanh toán</>;
    case "DELIVERED":
      return <>Đã lấy hàng</>;
    case "CANCELED":
      return <>Đã hủy</>;
    case "USER_PAID":
      return <>Chờ admin duyệt thanh toán</>;
    case "RETURNING":
      return <>Chờ chủ sách nhận sách</>;
    case "RETURNED":
      return <>Đã trả sách</>;
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
export { renderPayment, renderStatus };
