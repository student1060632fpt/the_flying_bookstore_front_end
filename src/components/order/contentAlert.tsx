import dayjs from "dayjs";
import { IOrder, IOrderStatus } from "../../types/order";

type IOrderStatusMessage = {
  isCustomer: {
    [key in IOrderStatus]?: string;
  };
  isManager: {
    [key in IOrderStatus]?: string;
  };
};
export let callContentAlert: (order: IOrder) => IOrderStatusMessage | null = (order: IOrder) => {
  const dateEnd = dayjs(order?.leaseOrder?.toDate);

  const duration = dateEnd.diff(order?.leaseOrder?.fromDate, "day");

  if (!order?.leaseOrder?.status) return null;
  return {
    isCustomer: {
      ORDERED_PAYMENT_PENDING: `Người thuê mới đặt hàng, chờ người thuê thanh toán`,
      USER_PAID: "Người thuê đã thanh toán, chờ admin xác nhận đã nhận tiền thành công",
      PAYMENT_SUCCESS: "Người thuê đã thanh toán thành công, chủ sách cần chuẩn bị sách để người thuê lấy sách",
      DELIVERED: "Đã giao sách cho người thuê",
      RETURNING: "Bạn đã được nhận lại sách chưa?",
      RETURNED: "Bạn chờ admin trả lại tiền thuê trong 3-5 ngày làm việc nhé",
    },
    isManager: {
      ORDERED_PAYMENT_PENDING:
        order.leaseOrder.paymentMethod == "COD"
          ? "Vui lòng thanh toán đơn hàng trong 24 giờ"
          : "Vui lòng thanh toán đơn hàng trong 24 giờ, nếu chuyển khoản thành công, bạn hãy nhấn nút Đã trả tiền",
      USER_PAID: "Vui lòng chờ admin xác nhận đã nhận tiền của bạn thành công",
      PAYMENT_SUCCESS:
        "Vui lòng chỉ nhấn “đã nhận được hàng” khi đơn hàng đã được giao đến bạn và bạn đã nhận được hàng",
      DELIVERED: dayjs().isSame(order?.leaseOrder?.toDate, "day")
        ? "Bạn đã đến hạn trả sách"
        : `Bạn còn ${duration} ngày nữa, bạn có muốn trả sách sớm?`,
      RETURNED: "Bạn chờ admin trả lại tiền cọc trong 3-5 ngày làm việc nhé",
    },
  };
};
