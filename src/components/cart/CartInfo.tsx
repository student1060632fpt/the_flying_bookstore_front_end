import { GrUserManager } from "react-icons/gr";
import { RiCalendarTodoLine } from "react-icons/ri";
import { RiMapPin2Line } from "react-icons/ri";
import { PiMoney } from "react-icons/pi";
import { GiMoneyStack } from "react-icons/gi";
import { TbSum } from "react-icons/tb";
import { Button } from "@mui/material";
import { CiShoppingCart } from "react-icons/ci";

const CartInfo = () => {
  return (
    <div className="border py-8 px-8 rounded-lg">
      <h3 className="text-xl font-semibold">Thông tin đặt hàng</h3>
      <div className="columns-2 gap-10 my-4">
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
      </div>
      <div className="flex justify-center">
        <Button
          variant="contained"
          color="secondary"
          sx={{ color: "white" }}
          size="large"
          startIcon={<CiShoppingCart />}
        >
          Đặt thuê hàng
        </Button>
      </div>
    </div>
  );
};

export default CartInfo;
