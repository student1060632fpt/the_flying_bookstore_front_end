import { PiMoney } from "react-icons/pi";
import { GiMoneyStack } from "react-icons/gi";
import { TbSum } from "react-icons/tb";
import { RiCalendarTodoLine } from "react-icons/ri";
import "./Cart.scss"
import { useStoreCart } from "@/hooks/cart";
import { formatCurrency } from "@/utils/helps";

const CartTotal = () => {
  const cart = useStoreCart(state=>state.cart.rent)
  return (
    <div className="total">
      <div className="total__row">
        <RiCalendarTodoLine className="total__icon" />
        <p className="total__title">Số ngày thuê</p>
        <p className="total__description">{cart?.duration}</p>
      </div>
      <div className="total__row">
        <PiMoney className="total__icon" />
        <p className="total__title">Tiền thuê</p>
        <p className="total__description">{formatCurrency(cart?.totalRent)}</p>
      </div>
      <div className="total__row">
        <GiMoneyStack className="total__icon" />
        <p className="total__title">Tiền cọc</p>
        <p className="total__description">{formatCurrency(cart?.book.depositFee)}</p>
      </div>
      <div className="total__row border-t">
        <TbSum className="total__icon" />
        <p className="total__title">Tổng cộng</p>
        <p className="total__description">{formatCurrency(cart?.total)}</p>
      </div>
    </div>
  );
};

export default CartTotal;
