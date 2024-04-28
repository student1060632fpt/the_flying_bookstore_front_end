import { useStoreCart } from "@/hooks/cart";
import dayjs from "dayjs";
import { GrUserManager } from "react-icons/gr";
import { RiCalendarTodoLine } from "react-icons/ri";
import { RiMapPin2Line } from "react-icons/ri";
import { IOrder } from "../../types/order";
import { PiPhone } from "react-icons/pi";
import { formatPhoneNumber } from "../../utils/helps";

const OrderInfoRent = ({ order }: { order: IOrder | undefined }) => {
  const cart = useStoreCart((state) => state.cart);
  return (
    <div className="total">
      <div className="total__row">
        <GrUserManager className="total__icon" />
        <p className="total__title">Người cho thuê</p>
        <p className="total__description">
        {order?.lessor.lastName} {order?.lessor.firstName} 
        </p>
      </div>

      <div className="total__row">
        <RiCalendarTodoLine className="total__icon" />
        <p className="total__title">Thời gian thuê</p>
        <p className="total__description">
          {dayjs(order?.leaseOrder.fromDate).format("DD/MM/YYYY")} -{" "}
          {dayjs(order?.leaseOrder.toDate).format("DD/MM/YYYY")}
        </p>
      </div>

      <div className="total__row">
        <RiMapPin2Line className="total__icon" />
        <p className="total__title">Địa chỉ</p>
        <p className="total__description">{order?.leaseOrder.lessorAddress}</p>
      </div>
      <div className="total__row">
        <PiPhone className="total__icon" />
        <p className="total__title">Số điện thoại</p>
        <p className="total__description">{formatPhoneNumber(order?.lessor.phoneNumber)}</p>
      </div>
    </div>
  );
};

export default OrderInfoRent;
