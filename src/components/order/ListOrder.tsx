import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import NoData from "./NoData";
import { Grid, Typography, useTheme } from "@mui/material";
import OrderFooter from "./OrderFooter";
import { HeaderOrder } from "./HeaderOrder";
import { columnsOrder, rowsOrder } from "./column";
import { useEffect } from "react";
import axios from "axios";
import { useAuthStore } from "../../hooks/user";

export default function ListOrder({ status }: { status: number }) {
  const { profile } = useAuthStore();

  const getAllOrder = async () => {
    return await axios
      .request({
        url: `http://localhost:8082/api/leaseOrder/search/lessee/${profile?.id}`,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
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
        console.log(response.data);
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
        return await getAllOrder();
    }
  };
  useEffect(() => {
    callWhichApi();
  }, [status]);

  return (
    <Box
      sx={{
        width: "100%",
        border: 1,
        borderRadius: 3,
        px: 2,
        py: 1,
        height: rowsOrder[0]!! ? "auto" : "500px",
      }}
    >
      <HeaderOrder />
      <DataGrid
        rows={rowsOrder}
        columns={columnsOrder}
        disableRowSelectionOnClick
        slots={{ noRowsOverlay: NoData, footer: OrderFooter }}
        sx={{ border: "none" }}
        hideFooterPagination
        hideFooterSelectedRowCount
        slotProps={{ footer: {} }}
      />
    </Box>
  );
}
