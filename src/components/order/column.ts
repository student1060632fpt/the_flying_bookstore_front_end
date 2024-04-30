import { GridColDef } from "@mui/x-data-grid";
import { IOrder } from "../../types/order";

export type IRow = {
  id: number;
  title: string;
  deposit: number;
  quantity: number;
  price: number;
  total: number;
};
// Function to convert IOrder and ILeaseOrderDetail to IRow
export function convertToRow(order: IOrder): IRow {
  const {
    listing,
    leaseOrder,
  } = order;
  const id = listing?.id || 0;
  const title = listing?.book.title || "";
  const totalDeposit = leaseOrder?.totalDeposit || 0;
  const totalLeaseFee = leaseOrder?.totalLeaseFee || 0;

  const row: IRow = {
    id,
    title,
    deposit: totalDeposit,
    quantity: 1,
    price: totalLeaseFee,
    total: totalDeposit + totalLeaseFee,
  };

  return row;
}

// Example usage:
export const columnsOrder: GridColDef<IRow>[] = [
  { field: "id", headerName: "Id bài đăng", width: 90, sortable: false },
  {
    field: "title",
    headerName: "Tên sách",
    minWidth: 150,
    sortable: false,
  },
  {
    field: "deposit",
    headerName: "Tiền cọc",
    width: 120,
    type: "number",
    sortable: false,
  },
  {
    field: "quantity",
    headerName: "Số lượng",
    type: "number",
    sortable: false,
    width: 150,
  },
  {
    field: "price",
    headerName: "Tiền thuê",
    type: "number",
    sortable: false,
    width: 150,
  },
  {
    field: "total",
    headerName: "Tổng cộng",
    sortable: false,
    type: "number",
    width: 150,
  },
];
