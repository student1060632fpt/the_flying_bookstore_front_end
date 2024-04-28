"use client";
import { Typography } from "@mui/material";
import Order from "../../../../components/checkout/Order";
import { IOrder } from "../../../../types/order";
import { getDetailOrder } from "../../../../api/order";
import { useEffect, useState } from "react";

const Page = ({ params }: { params: { order: string } }) => {
  const [orderDetail, setOrderDetail] = useState<IOrder>();
  console.log({ params });

  useEffect(() => {
    const getOrderApi = async () => {
      if (!params?.order) return;
      try {
        const response = await getDetailOrder(parseInt(params?.order));
        if (response?.data) {
          setOrderDetail(response.data);
        }
      } catch (error) {}
    };
    getOrderApi();
  }, [params?.order]);

  return (
    <>
      <div className="w-full mx-auto border rounded-lg py-8 mt-20 px-10">
        <h3 className="text-center text-primary text-2xl font-semibold text-primary mb-6">
          Chi tiết đơn hàng #{params?.order}
        </h3>

        <Order orderDetail={orderDetail} />
      </div>
    </>
  );
};

export default Page;
