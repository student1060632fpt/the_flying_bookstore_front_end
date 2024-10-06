"use client";
import { Button, Grid, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useAuthStore } from "../../hooks/user";
import { IOrder } from "../../types/order";
import DetailOrder from "./DetailOrder";
import { getAllOrder } from "../../api/order";
import { useStoreAlert } from "../../hooks/alert";
import { RxReload } from "react-icons/rx";
import { getOrderWithStatusService } from "../../api/order";
import { useRouter } from "next/navigation";

export default function OrderBuySell({
  status,
  changeStatus,
  isCustomer,
}: {
  isCustomer: boolean;
  status: number;
  changeStatus: (e: any, newValue: number) => void;
}) {
  const router = useRouter();
  const { profile } = useAuthStore();
  const [listOrder, setListOrder] = useState<Array<IOrder>>();
  const { callAlert } = useStoreAlert();
  const callApiGetAllOrder = useCallback(async () => {
    if (!profile?.id) {
      callAlert("Mời bạn đăng nhập lại!");
      return;
    }
    return await getAllOrder(profile?.id, isCustomer).then((response) => {
      setListOrder(response);
    });
  }, [profile?.id, isCustomer, callAlert]);
  const getOrderWithStatus = useCallback(async (status: number) => {
    const response = await getOrderWithStatusService(status, profile, isCustomer);
    if(response){
      if (response.data) {
        setListOrder(response.data);
      }
    }
    else{
      console.log('Error fetching data:', response?.error);
    };
  }, [profile, isCustomer]);
  const callWhichApi = useCallback(async () => {
    switch (status) {
      case 1:
      case 2:
      case 3:
        return await getOrderWithStatus(status);
      case 0:
        return await callApiGetAllOrder(); // TODO: lấy api mới
      default:
        return callAlert("Cần thêm status mới");
    }
  }, [status, getOrderWithStatus, callApiGetAllOrder, callAlert]);


  useEffect(() => {
    callWhichApi();
  }, [callWhichApi]);
  const reloadButton = async () => {
    return await callWhichApi().then(() => {
      callAlert("Đã tải lại thành công");
    });
  };
  const reloadStatus = async (e: any, newValue: number) => {
    changeStatus(e, newValue);
    return await callWhichApi();
  };
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true); // This ensures code runs only on the client side
  }, []);

  if (!isMounted) {
    return null; // Avoid rendering the component on the server side
  }
  if (!profile?.id) {
    router.push("/login");
    return <>Mời bạn đăng nhập</>;
  }
  if (!listOrder || !Array.isArray(listOrder) || listOrder?.length == 0)
    return (
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography>Bạn hiện không có đơn hàng nào</Typography>
          <Button
            startIcon={<RxReload />}
            variant="outlined"
            onClick={reloadButton}
          >
            Tải lại
          </Button>
        </Grid>
      </Grid>
    );
  return (
    <Grid container spacing={3}>
      <Grid
        item
        xs={12}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography>Bạn hiện có {listOrder?.length} đơn hàng</Typography>
        <Button
          startIcon={<RxReload />}
          variant="outlined"
          onClick={reloadButton}
        >
          Tải lại
        </Button>
      </Grid>
      {listOrder.map((order, index) => (
        <Grid item xs={12} key={index}>
          <DetailOrder
            order={order}
            changeStatus={reloadStatus}
            isCustomer={isCustomer}
          />
        </Grid>
      ))}
    </Grid>
  );
}
