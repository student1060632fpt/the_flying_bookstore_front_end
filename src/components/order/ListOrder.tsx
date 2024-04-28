import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import NoData from "./NoData";
import { Grid, Typography, useTheme } from "@mui/material";
import OrderFooter from "./OrderFooter";
import { HeaderOrder } from "./HeaderOrder";
import { IRow, columnsOrder, convertToRow } from "./column";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthStore } from "../../hooks/user";
import { IOrder } from "../../types/order";
import DetailOrder from "./DetailOrder";
import { getAllOrder } from "../../api/order";

export default function ListOrder({ status }: { status: number }) {
  const { profile } = useAuthStore();
  const [listOrder, setListOrder] = useState<Array<IOrder>>();
  const callApiGetAllOrder = async () => {
    if (!profile?.id) return;
    return await getAllOrder(profile?.id)
      .then((response) => {
        setListOrder(response);
      })
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
          console.log(response.data);
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
        return await getOrderWithStatus(status);
      case 0:
      default:
        return await callApiGetAllOrder();
    }
  };
  useEffect(() => {
    callWhichApi();
  }, [status]);
  if (!listOrder) return <></>;
  return (
    <Grid container spacing={3}>
      {listOrder.map((order, index) => (
        <Grid item xs={12} key={index}>
          <DetailOrder order={order} />
        </Grid>
      ))}
    </Grid>
  );
}
