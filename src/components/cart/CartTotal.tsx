import { PiMoney } from "react-icons/pi";
import { GiMoneyStack } from "react-icons/gi";
import { TbSum } from "react-icons/tb";
import "./Cart.scss"

const CartTotal = () => {
  return (
    <div className="total">
      <div className="total__row">
        <PiMoney className="total__icon" />
        <p className="total__title">Tiền thuê</p>
        <p className="total__description">40.000đ</p>
      </div>
      <div className="total__row">
        <GiMoneyStack className="total__icon" />
        <p className="total__title">Tiền cọc</p>
        <p className="total__description">40.000đ</p>
      </div>
      <div className="total__row border-t">
        <TbSum className="total__icon" />
        <p className="total__title">Tổng cộng</p>
        <p className="total__description">100.000đ</p>
      </div>
    </div>
  );
};

export default CartTotal;
