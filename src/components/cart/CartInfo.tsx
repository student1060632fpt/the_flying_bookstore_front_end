

import { Button } from "@mui/material";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
import CartTotal from "./CartTotal";
import CartInfoRent from "./CartInfoRent";

const CartInfo = () => {
  return (
    <div className="border py-8 px-8 rounded-lg">
      <h3 className="text-xl font-semibold">Thông tin đặt hàng</h3>
      <div className="columns-2 gap-10 my-4">
        <CartInfoRent/>
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
