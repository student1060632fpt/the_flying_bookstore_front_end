import { useStoreCart } from "@/hooks/cart";
import dayjs from "dayjs";
import { GrUserManager } from "react-icons/gr";
import { RiCalendarTodoLine } from "react-icons/ri";
import { RiMapPin2Line } from "react-icons/ri";
import { PiPhone } from "react-icons/pi";
import { formatPhoneNumber } from "../../utils/helps";


const CartInfoRent = () => {
  const cart = useStoreCart(state=>state.cart.rent)
  const book = cart?.book;
  return (
    <div className="total">
      <div className="total__row">
        <GrUserManager className="total__icon" />
        <p className="total__title">Người cho thuê</p>
        <p className="total__description">{book?.user.lastName} {book?.user.firstName}</p>
      </div>

      <div className="total__row">
        <RiCalendarTodoLine className="total__icon" />
        <p className="total__title">Thời gian thuê</p>
        <p className="total__description">{dayjs(cart?.dayRent.dateStart).format("DD/MM/YYYY")} - {dayjs(cart?.dayRent.dateEnd).format("DD/MM/YYYY")}</p>
      </div>

      <div className="total__row">
        <RiMapPin2Line className="total__icon" />
        <p className="total__title">Địa chỉ</p>
        <p className="total__description">
          {book?.address}
        </p>
      </div>

      <div className="total__row">
        <PiPhone className="total__icon" />
        <p className="total__title">Số điện thoại</p>
        <p className="total__description">
          {formatPhoneNumber(book?.user.phoneNumber)}
        </p>
      </div>
    </div>
  );
};

export default CartInfoRent;
