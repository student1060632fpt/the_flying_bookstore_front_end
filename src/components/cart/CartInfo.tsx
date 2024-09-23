"use client";
import { Button } from "@mui/material";
import { CiShoppingCart } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/hooks/user";
import AlertSignOut from "../nav/AlertSignOut";
import { useEffect, useState } from "react";
import { useStoreStep } from "../../hooks/step";
import { ICommonAlert } from "../../types/common";
import { useStoreCart } from "../../hooks/cart";
import "./Cart.scss"
import { IListing } from "../../types/book";
import { getBookDetailService } from "../../api/bookListService";
import InfoCheckout from "./InfoCheckout";

const CartInfo = ({ tabNum }: { tabNum: number }) => {
  const router = useRouter();
  const { isLogin } = useAuthStore();
  const { resetStep } = useStoreStep()
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
        <InfoCheckout tabNum={tabNum} />
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
          Đặt {tabNum == 1 ? `mua` : `thuê`} hàng
        </Button>
      </div>
      <AlertSignOut alert={alert} setAlert={setAlert} />
    </div>
  );
};

export default CartInfo;
