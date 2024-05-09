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
import { columnsPost, rowsPost } from "../../../components/managerPost/column";
import DeletePostModal from "../../../components/managerPost/DeletePostModal";


const ManagerPost = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
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
      <Box sx={{ width: "100%", height: rowsPost[0]!! ? "auto" : "500px" }}>
        <DataGrid
          rows={rowsPost}
          columns={columnsPost(handleClickOpen)}
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
      <DeletePostModal handleClose={handleClose} open={open}/>
      
    </>
  );
};

export default ManagerPost;
