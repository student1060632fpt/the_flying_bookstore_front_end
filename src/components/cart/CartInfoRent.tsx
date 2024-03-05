import { GrUserManager } from "react-icons/gr";
import { RiCalendarTodoLine } from "react-icons/ri";
import { RiMapPin2Line } from "react-icons/ri";

const CartInfoRent = () => {
  return (
    <div className="">
          <div className="flex  items-center py-4">
            <GrUserManager className="text-secondary text-xl mr-3" />
            <p className="text-gray-500 flex-1">Người cho thuê</p>
            <p className="font-semibold">Nguyễn Thảo</p>
          </div>

          <div className="flex  items-center py-4">
            <RiCalendarTodoLine className="text-secondary text-xl mr-3" />
            <p className="text-gray-500 flex-1">Thời gian thuê</p>
            <p className="font-semibold">10/10/2023 - 20/10/2023</p>
          </div>

          <div className="flex  items-center py-4">
            <RiMapPin2Line className="text-secondary text-xl mr-3" />
            <p className="text-gray-500 flex-1">Địa chỉ</p>
            <p className="font-semibold">
              246 Nơ Trang Long, phường 12, quận Bình Thạnh
            </p>
          </div>
        </div>
  )
}

export default CartInfoRent