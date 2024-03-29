import Box from "@mui/material/Box";
import {
  DataGrid,
  GridColDef,
} from "@mui/x-data-grid";
import NoData from "./NoData";
import {
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import OrderFooter from "./OrderFooter";

type IRow = {
  id: number;
  title: string;
  deposit: number;
  quantity: number;
  price: number;
  total: number;
};

const columns: GridColDef<(typeof rows)[number]>[] = [
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

const rows: Array<IRow> = [
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


const HeaderOrder = () => {
  const theme = useTheme();
  return (
    <Grid container spacing={2} justifyItems="center" alignItems="center">
      <Grid item xs={2}>
        <Typography variant="body2" sx={{ color: theme.palette.grey[600] }}>
          Chủ sách
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
          Nguyễn Thảo
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body2" sx={{ color: theme.palette.grey[600] }}>
          Số điện thoại
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
          0905 907 362
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="body2" sx={{ color: theme.palette.grey[600] }}>
          Địa chỉ
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
          1 Lý Thái Tổ, p12, q.10
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body2" sx={{ color: theme.palette.grey[600] }}>
          Thời gian thuê
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
          12/2/2024 - 4/3/2024
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="body2" sx={{ color: theme.palette.grey[600] }}>
          Trạng thái người thuê
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
          Chuẩn bị nhận hàng
        </Typography>
      </Grid>
    </Grid>
  );
};
export default function ListOrder() {
  return (
    <Box
      sx={{
        width: "100%",
        border: 1,
        borderRadius: 3,
        px: 2,
        py: 1,
        height: rows[0]!! ? "auto" : "500px",
      }}
    >
      <HeaderOrder />
      <DataGrid
        rows={rows}
        columns={columns}
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
