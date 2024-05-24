import { useStoreCart } from "@/hooks/cart";
import dayjs from "dayjs";
import { GrUserManager } from "react-icons/gr";
import { RiCalendarTodoLine } from "react-icons/ri";
import { RiMapPin2Line } from "react-icons/ri";
import { IOrder } from "../../types/order";
import { PiPhone } from "react-icons/pi";
import { formatPhoneNumber } from "../../utils/helps";

const OrderInfoRent = ({ order }: { order: IOrder | undefined }) => {
  const { lessor,leaseOrder } = order || {};
  return (
    <div className="total">
      <div className="total__row">
        <GrUserManager className="total__icon" />
        <p className="total__title">Người cho thuê</p>
        <p className="total__description">
        {lessor?.lastName} {lessor?.firstName} 
        </p>
      </div>

      <div className="total__row">
        <RiCalendarTodoLine className="total__icon" />
        <p className="total__title">Thời gian thuê</p>
        <p className="total__description">
          {dayjs(leaseOrder?.fromDate).format("DD/MM/YYYY")} -{" "}
          {dayjs(leaseOrder?.toDate).format("DD/MM/YYYY")}
        </p>
      </div>

      <div className="total__row">
        <RiMapPin2Line className="total__icon" />
        <p className="total__title">Địa chỉ</p>
        <p className="total__description">{leaseOrder?.lessorAddress}</p>
      </div>
      <div className="total__row">
        <PiPhone className="total__icon" />
        <p className="total__title">Số điện thoại</p>
        <p className="total__description">{formatPhoneNumber(lessor?.phoneNumber)}</p>
      </div>
    </div>
  );
};

export default OrderInfoRent;
