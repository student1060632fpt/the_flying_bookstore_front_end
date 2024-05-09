"use client";
import NoData from "@/components/order/NoData";
import theme from "@/utils/theme";
import { Box, Button, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Rating, Slide, Stack, Typography } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import Link from "next/link";
import React, { useState } from "react";
import { CiEdit, CiTrash } from "react-icons/ci";

const rows = [
  {
    id: 1,
    status: 1,
    title: "Snow",
    date: "13/03/2024",
    price: 1400,
    rate: 3.5,
  },
  {
    id: 2,
    status: 0,
    title: "Lannister",
    date: "13/03/2024",
    price: 3100,
    rate: 4,
  },
  {
    id: 3,
    status: 1,
    title: "Lannister",
    date: "13/03/2024",
    price: 3100,
    rate: 5,
  },
  {
    id: 4,
    status: 0,
    title: "Stark",
    date: "13/03/2024",
    price: 1100,
    rate: 4,
  },
  {
    id: 5,
    status: 1,
    title: "Targaryen",
    date: "13/03/2024",
    price: 1000,
    rate: 4,
  },
  {
    id: 6,
    status: 0,
    title: "Melisandre",
    date: "13/03/2024",
    price: 15000,
    rate: 3,
  },
  {
    id: 7,
    status: 1,
    title: "Clifford",
    date: "13/03/2024",
    price: 4400,
    rate: 3,
  },
  {
    id: 8,
    status: 0,
    title: "Frances",
    date: "13/03/2024",
    price: 3600,
    rate: 2,
  },
  {
    id: 9,
    status: 1,
    title: "Roxie",
    date: "13/03/2024",
    price: 6500,
    rate: 1,
  },
];
function renderRating(params: any) {
  return <Rating precision={0.5} readOnly value={params.value} />;
}
const renderStatus = (params: any) => {
  console.log(params);

  if (params.row.status == 0) {
    return <Chip label="Đã đăng" color="secondary" />;
  }
  return <Chip label="Đã có người thuê" color="primary" />;
};
const ManagerPost = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: "title",
      headerName: "Tên bài đăng",
      width: 100,
      editable: true,
    },
    {
      field: "date",
      headerName: "Ngày đăng",
      width: 100,
      editable: true,
    },
    {
      field: "rate",
      headerName: "Đánh giá",
      renderCell: renderRating,
      display: "flex" as const,
      width: 150,
    },
    {
      field: "status",
      headerName: "Trạng thái",
      width: 150,
      renderCell: renderStatus,
    },
    {
      headerName: "Giá thuê",
      field: "price",
      width: 150,
      valueGetter: (value) => `${value}đ/ngày`,
    },
    {
      field: "actions",
      type: "actions",
      width: 100,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<CiEdit size={20} />}
          label="Delete"
          key="1"
          size="large"
        />,
        <GridActionsCellItem
          icon={<CiTrash size={20} color={theme.palette.error.main} />}
          key="2"
          label="Toggle Admin"
          size="large"
          onClick={handleClickOpen}
        />,
      ],
    },
  ];
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Typography variant="h4" gutterBottom>
          Quản lý bài đăng của tôi
        </Typography>
        <Link href="/manager-post/add-post">
        <Button variant="contained">Thêm bài đăng</Button>
        </Link>
      </Stack>
      <Box sx={{ width: "100%", height: rows[0]!! ? "auto" : "500px" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          slots={{ toolbar: GridToolbar, noRowsOverlay: NoData }}
          slotProps={{ toolbar: { showQuickFilter: true } }}
          sx={{ py: 1, px: 2 }}
        />
      </Box>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Bạn có muốn xóa bài đăng Muôn kiếp nhân sinh không?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Sau khi xóa sẽ không thể hồi phục được.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Hủy</Button>
          <Button onClick={handleClose}>Đồng ý</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default ManagerPost;
