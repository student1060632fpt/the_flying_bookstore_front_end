import { PiMoney } from "react-icons/pi";
import { GiMoneyStack } from "react-icons/gi";
import { TbSum } from "react-icons/tb";
import { RiCalendarTodoLine } from "react-icons/ri";
import "./../cart/Cart.scss"
import { useStoreCart } from "@/hooks/cart";
import { formatCurrency } from "@/utils/helps";
import { IOrder } from "../../types/order";
import dayjs from "dayjs";

const OrderTotal = ({ order }: { order: IOrder | undefined }) => {
  const renderDurationRent = () => {
    const firstDayEnd = order?.toDate;
    const dateStart = order?.fromDate;
    const dateEnd = dayjs(firstDayEnd);
    if (!dateStart || !dateEnd) return 0;
    const duration = dateEnd.diff(dateStart, "day");
    return duration;
  };
  return (
    <div className="total">
      <div className="total__row">
        <RiCalendarTodoLine className="total__icon" />
        <p className="total__title">Số ngày thuê</p>
        <p className="total__description">{renderDurationRent()}</p>
      </div>
      <div className="total__row">
        <PiMoney className="total__icon" />
        <p className="total__title">Tiền thuê</p>
        <p className="total__description">
          {formatCurrency(order?.totalLeaseFee)}
        </p>
      </div>
      <div className="total__row">
        <GiMoneyStack className="total__icon" />
        <p className="total__title">Tiền cọc</p>
        <p className="total__description">
          {formatCurrency(order?.totalDeposit)}
        </p>
      </div>
      <div className="total__row border-t">
        <TbSum className="total__icon" />
        <p className="total__title">Tổng cộng</p>
        <p className="total__description">
          {!!order?.totalDeposit && !!order?.totalLeaseFee && formatCurrency(order?.totalDeposit + order?.totalLeaseFee)}
        </p>
      </div>
    </div>
  );
};

export default OrderTotal;
