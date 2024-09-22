"use client";
import { Button } from "@mui/material";
import { CiShoppingCart } from "react-icons/ci";
import CartTotal from "./CartTotal";
import CartInfoRent from "./CartInfoRent";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/hooks/user";
import AlertSignOut from "../nav/AlertSignOut";
import { useState } from "react";
import { useStoreStep } from "../../hooks/step";
import { ICommonAlert } from "../../types/common";

const CartInfo = () => {
  const router = useRouter();
  const { isLogin } = useAuthStore();
  const {resetStep} = useStoreStep()
  const [alert, setAlert] = useState<ICommonAlert>({
    open: false,
    message: "Bạn cần đăng nhập trước",
    severity: "error",
  });
  const onClickNavigate = () => {
    if (isLogin) {
      resetStep()
      router.push("/checkout");
    } else {
      setAlert((state) => ({ ...state, open: true }));
    }
  };

  return (
    <div className="border py-8 px-8 rounded-lg">
      <h3 className="text-xl font-semibold">Thông tin đặt hàng</h3>
      <div className="columns-2 gap-10 my-4">
        <CartInfoRent />
        <CartTotal />
      </div>
      <div className="flex justify-center">
        <Button
          variant="contained"
          color="secondary"
          sx={{ color: "white" }}
          size="large"
          startIcon={<CiShoppingCart />}
          onClick={onClickNavigate}
        >
          Đặt thuê hàng
        </Button>
      </div>
      <AlertSignOut alert={alert} setAlert={setAlert} />
    </div>
  );
};

export default CartInfo;
