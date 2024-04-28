import { Alert, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import BookItem from "./BookItem";
import { BsFileText } from "react-icons/bs";
import { PiCalendarCheck } from "react-icons/pi";
import CartInfoRent from "../cart/CartInfoRent";
import { LuFlag } from "react-icons/lu";
import { CgCreditCard } from "react-icons/cg";
import CartTotal from "../cart/CartTotal";
import { useStoreOrder } from "../../hooks/order";
import axios from "axios";
import { IOrder, IOrderStatus, IPaymentMethod } from "../../types/order";
import dayjs from "dayjs";
import OrderInfoRent from "./OrderInfoRent";
import OrderTotal from "./OrderTotal";
import { renderPayment, renderStatus } from "./PaymentStatus";



const Order = ({orderDetail}:{orderDetail?:IOrder|undefined}) => {
 
  
  return (
    <>
      <Divider>Giỏ hàng</Divider>
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
            <p className="total__description">{orderDetail?.id}</p>
          </div>
          <div className="flex total__row">
            <PiCalendarCheck className="total__icon" />
            <p className="total__title">Ngày đặt thuê</p>
            <p className="total__description">
              {dayjs(orderDetail?.createdDate).format("DD/MM/YYYY")}
            </p>
          </div>
          <OrderInfoRent order={orderDetail} />
        </div>
        <div className="total">
          <div className="flex total__row">
            <LuFlag className="total__icon" />
            <p className="total__title">Trạng thái</p>
            <div className="total__description">
              {renderStatus(orderDetail?.status)}
            </div>
          </div>
          <div className="flex total__row">
            <CgCreditCard className="total__icon" />
            <p className="total__title">Phương thức thanh toán</p>
            <p className="total__description">
              {renderPayment(orderDetail?.paymentMethod)}
            </p>
          </div>
          <OrderTotal order={orderDetail} />
        </div>
      </div>
    </>
  );
};

export default Order;
