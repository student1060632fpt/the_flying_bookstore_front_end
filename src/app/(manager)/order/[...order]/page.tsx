'use client'
import { Typography } from "@mui/material";
import Order from "../../../../components/checkout/Order";
import { IOrder } from "../../../../types/order";
import { getDetailOrder } from "../../../../api/order";
import { useEffect, useState } from "react";

const Page = ({ params }: { params: { order: string } }) => {
  const [orderDetail, setOrderDetail] = useState<IOrder>()
  console.log({ params });
  
  useEffect(() => {
    const getOrderApi = async () => {
      if(!params?.order) return 
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
      <Typography variant="h4" gutterBottom>
        Chi tiết đơn hàng #{params?.order}
      </Typography>
      <Order orderDetail={orderDetail} />
    </>
  );
};

export default Page;
