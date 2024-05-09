"use client";
import NoData from "@/components/order/NoData";
import { Box, Button, Stack, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  IRowsPost2,
  columnsPost,
  convertDataToIRow,
} from "../../../components/managerPost/column";
import DeletePostModal from "../../../components/managerPost/DeletePostModal";
import axios from "axios";

const ManagerPost = () => {
  const [modalDelete, setModalDelete] = useState<{
    open: boolean;
    data: IRowsPost2 | null;
  }>({
    open: false,
    data: null,
  });
  const [listPost, setListPost] = useState<IRowsPost2[]>([]);
  const handleClickOpen = (data: IRowsPost2) => {
    setModalDelete({ open: true, data });
  };

  const handleClose = () => {
    setModalDelete((state) => ({ ...state, open: false }));
  };
  const getListPost = async (): Promise<void> => {
    try {
      const response = await axios.request({
        url: "http://localhost:8082/api/listing/search/byOwnerId/1000",
      });
      console.log(JSON.stringify(response.data));
      const convertData = convertDataToIRow(response?.data?.content);
      setListPost(convertData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getListPost();
  }, []);

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
      <Box sx={{ width: "100%", height: listPost[0]!! ? "auto" : "500px" }}>
        <DataGrid
          rows={listPost}
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
      <DeletePostModal handleClose={handleClose} modalDelete={modalDelete} getListPost={getListPost} />
    </>
  );
};

export default ManagerPost;
