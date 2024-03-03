import { GrUserManager } from "react-icons/gr";
import { RiCalendarTodoLine } from "react-icons/ri";
import { RiMapPin2Line } from "react-icons/ri";

import { Button } from "@mui/material";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
import CartTotal from "./CartTotal";

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
        <CartTotal />
      </div>
      <div className="flex justify-center">
        <Link href="/checkout">
          <Button
            variant="contained"
            color="secondary"
            sx={{ color: "white" }}
            size="large"
            startIcon={<CiShoppingCart />}
          >
            Đặt thuê hàng
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartInfo;
