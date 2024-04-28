import { GridColDef } from "@mui/x-data-grid";

type IRow = {
  id: number;
  title: string;
  deposit: number;
  quantity: number;
  price: number;
  total: number;
};

export const columnsOrder: GridColDef<(typeof rowsOrder)[number]>[] = [
  { field: "id", headerName: "Stt", width: 90, sortable: false },
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