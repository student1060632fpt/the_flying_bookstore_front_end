import { Divider } from "@mui/material";
import React from "react";
import BookItem from "./BookItem";
import { BsFileText } from "react-icons/bs";
import { PiCalendarCheck } from "react-icons/pi";
import CartInfoRent from "../cart/CartInfoRent";
import { LuFlag } from "react-icons/lu";
import { CgCreditCard } from "react-icons/cg";
import CartTotal from "../cart/CartTotal";

const Order = ({ status }: { status?: string }) => {
  return (
    <>
      <Divider>Giỏ hàng</Divider>
      <BookItem />
      <BookItem />
      <Divider sx={{ mt: 3 }} />
      <h4 className="text-lg font-medium text-center mt-5 my-3">
        Thông tin đặt hàng
      </h4>
      <div className="grid grid-cols-2 gap-10">
        <div className="total">
          <div className="flex total__row">
            <BsFileText className="total__icon" />
            <p className="total__title">Mã đơn hàng</p>
            <p className="total__description">123123</p>
          </div>
          <div className="flex total__row">
            <PiCalendarCheck className="total__icon" />
            <p className="total__title">Ngày đặt thuê</p>
            <p className="total__description">10/10/2023</p>
          </div>
          <CartInfoRent />
        </div>
        <div className="total">
          <div className="flex total__row">
            <LuFlag className="total__icon" />
            <p className="total__title">Trạng thái</p>
            <p className="total__description">
              {status ? status : "Chờ lấy hàng"}
            </p>
          </div>
          <div className="flex total__row">
            <CgCreditCard className="total__icon" />
            <p className="total__title">Phương thức thanh toán</p>
            <p className="total__description">COD</p>
          </div>
          <CartTotal />
        </div>
      </div>
    </>
  );
};

export default Order;
