import { Box } from "@mui/material";
import { HeaderOrder } from "./HeaderOrder";
import { DataGrid } from "@mui/x-data-grid";
import { IRow, columnsOrder, convertToRow } from "./column";
import NoData from "./NoData";
import OrderFooter from "./OrderFooter";
import { IOrder } from "../../types/order";
import { useState } from "react";

const DetailOrder = ({ order }: { order: IOrder }) => {
  const [listBook, setListBook] = useState<IRow[]>([convertToRow(order)]);
  return (
    <Box
      sx={{
        width: "100%",
        border: 1,
        borderRadius: 3,
        px: 2,
        py: 1,
        height: listBook ? "auto" : "500px",
      }}
    >
      <HeaderOrder order={order} />
      <DataGrid
        rows={listBook}
        columns={columnsOrder}
        disableRowSelectionOnClick
        slots={{ noRowsOverlay: NoData }}
        sx={{ border: "none" }}
        hideFooterPagination
        hideFooterSelectedRowCount
        hideFooter
      />
      <OrderFooter  order={order}/>
    </Box>
  );
};

export default DetailOrder;
