import { GrUserManager } from "react-icons/gr";
import { RiCalendarTodoLine } from "react-icons/ri";
import { RiMapPin2Line } from "react-icons/ri";

const CartInfoRent = () => {
  return (
    <div className="total">
          <div className="total__row">
            <GrUserManager className="total__icon" />
            <p className="total__title">Người cho thuê</p>
            <p className="total__description">Nguyễn Thảo</p>
          </div>

          <div className="total__row">
            <RiCalendarTodoLine className="total__icon" />
            <p className="total__title">Thời gian thuê</p>
            <p className="total__description">10/10/2023 - 20/10/2023</p>
          </div>

          <div className="total__row">
            <RiMapPin2Line className="total__icon" />
            <p className="total__title">Địa chỉ</p>
            <p className="total__description">
              246 Nơ Trang Long, phường 12, quận Bình Thạnh
            </p>
          </div>
        </div>
  )
}

export default CartInfoRent