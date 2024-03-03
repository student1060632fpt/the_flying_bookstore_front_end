import { PiMoney } from "react-icons/pi";
import { GiMoneyStack } from "react-icons/gi";
import { TbSum } from "react-icons/tb";
const CartTotal = () => {
  return (
    <div className="">
          <div className="flex  items-center py-4">
            <PiMoney className="text-secondary text-xl mr-3" />
            <p className="text-gray-500 flex-1">Tiền thuê</p>
            <p className="font-semibold">40.000đ</p>
          </div>
          <div className="flex  items-center py-4">
            <GiMoneyStack className="text-secondary text-xl mr-3" />
            <p className="text-gray-500 flex-1">Tiền cọc</p>
            <p className="font-semibold">40.000đ</p>
          </div>
          <div className="flex  items-center py-4 border-t">
            <TbSum className="text-secondary text-xl mr-3" />
            <p className="text-gray-500 flex-1">Tổng cộng</p>
            <p className="font-semibold">100.000đ</p>
          </div>
        </div>
  )
}

export default CartTotal