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
    listing: {
      id,
      book: { title },
    },
    leaseOrder: { totalDeposit, totalLeaseFee },
  } = order;
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
  { field: "id", headerName: "Id", width: 90, sortable: false },
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

export const rowsOrder: Array<IRow> = [
  {
    id: 1,
    title: "Snow",
    deposit: 100000,
    quantity: 3,
    price: 5000,
    total: 10000,
  },
  {
    id: 2,
    title: "Lannister",
    deposit: 100000,
    quantity: 3,
    price: 5000,
    total: 10000,
  },
  {
    id: 3,
    title: "Lannister",
    deposit: 100000,
    quantity: 3,
    price: 5000,
    total: 10000,
  },
  {
    id: 4,
    title: "Stark",
    deposit: 100000,
    quantity: 3,
    price: 5000,
    total: 10000,
  },
];
