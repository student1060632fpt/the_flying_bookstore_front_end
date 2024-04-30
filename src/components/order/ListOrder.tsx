import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthStore } from "../../hooks/user";
import { IOrder } from "../../types/order";
import DetailOrder from "./DetailOrder";
import { getAllOrder } from "../../api/order";
import { useParams } from "next/navigation";
import { useStoreAlert } from "../../hooks/alert";

export default function ListOrder({
  status,
  changeStatus,
}: {
  status: number;
  changeStatus: (e: any, newValue: number) => void;
}) {
  const params = useParams<{ status: string[] }>();

  const { profile } = useAuthStore();
  const [listOrder, setListOrder] = useState<Array<IOrder>>();
  const { callAlert } = useStoreAlert();
  const callApiGetAllOrder = async () => {
    if (!profile?.id) {
      callAlert("Mời bạn đăng nhập lại!");
      return;
    }
    return await getAllOrder(profile?.id).then((response) => {
      setListOrder(response);
    });
  };
  const getOrderWithStatus = async (status: number) => {
    return await axios
      .request({
        url: `http://localhost:8082/api/leaseOrder/search/lessee/status/${profile?.id}`,
        params: {
          status,
        },
      })
      .then((response) => {
        if (response.data) {
          setListOrder(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const callWhichApi = async () => {
    switch (status) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        return await getOrderWithStatus(status);
      case 0:
        return await callApiGetAllOrder();
      default:
        return callAlert("Cần thêm status mới")
    }
  };

  useEffect(() => {
    callWhichApi();
  }, [status]);
  if (!listOrder || !Array.isArray(listOrder) || listOrder?.length == 0)
    return <>Không có đơn hàng nào</>;
  return (
    <Grid container spacing={3}>
      {listOrder.map((order, index) => (
        <Grid item xs={12} key={index}>
          <DetailOrder order={order} changeStatus={changeStatus} />
        </Grid>
      ))}
    </Grid>
  );
}
