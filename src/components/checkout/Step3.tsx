import React, { useEffect, useState } from "react";
import Order from "./Order";
import Link from "next/link";
import { Button } from "@mui/material";
import { CiShoppingCart } from "react-icons/ci";
import { useStoreOrder } from "../../hooks/order";
import { IOrder } from "../../types/order";
import axios from "axios";

const Step3 = () => {
  const { order: orderId } = useStoreOrder();
  const [orderDetail, setOrderDetail] = useState<IOrder>();

  useEffect(() => {
    const getDetailOrder = async () => {
      axios
        .request({ url: "http://localhost:8082/api/leaseOrder/" + orderId })
        .then((response) => {
          if (response.data) {
            console.log("response.data", response.data);
            setOrderDetail(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getDetailOrder();
  }, [orderId]);

  return (
    <>
      <div className="w-2/3 mx-auto border rounded-lg py-8 mt-20 px-10">
        <h3 className="text-center text-primary text-2xl font-semibold text-primary">
          Lấy thành công đơn hàng!
        </h3>
        <p className="text-gray-500 text-sm mt-1 text-center mb-4 ">
          Đọc sách vui bạn nhé!
        </p>
        {orderDetail ? (
          <Order orderDetail={orderDetail} />
        ) : (
          <>Không có đơn hàng</>
        )}
      </div>

      <div className=" mt-10 mb-20 w-2/3 mx-auto flex justify-between">
        <Link href="/">
          <Button
            variant="contained"
            color="secondary"
            sx={{ color: "white", textTransform: "none" }}
            size="large"
            startIcon={<CiShoppingCart />}
          >
            Tiếp tục mua sắm
          </Button>
        </Link>
        <Link href="/my-order/0">
          <Button
            variant="outlined"
            sx={{ textTransform: "none" }}
            size="large"
          >
            Quản lý đơn hàng của tôi
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Step3;
