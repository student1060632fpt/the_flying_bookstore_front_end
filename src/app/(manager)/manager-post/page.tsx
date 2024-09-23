"use client";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Box, Button, Stack, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import NoData from "@/components/order/NoData";
import {
  IRowsPost2,
  columnsPost,
  convertDataToIRow,
} from "@/components/managerPost/column";
import DeletePostModal from "@/components/managerPost/DeletePostModal";
import { useAuthStore } from "@/hooks/user";
import { getListPostService } from "@/api/managerPostService";

const ManagerPost = () => {
  const [modalDelete, setModalDelete] = useState<{
    open: boolean;
    data: IRowsPost2 | null;
  }>({
    open: false,
    data: null,
  });
  const {profile} = useAuthStore()
  const [listPost, setListPost] = useState<IRowsPost2[]>([]);
  const handleClickOpen = (data: IRowsPost2) => {
    setModalDelete({ open: true, data });
  };

  const handleClose = () => {
    setModalDelete((state) => ({ ...state, open: false }));
  };

  const getListPost = useCallback(async (): Promise<void> => {
    const response = await getListPostService(profile);
    console.log(JSON.stringify(response));
    const convertData = convertDataToIRow(response?.content);
    setListPost(convertData);
  }, [profile]);
  useEffect(() => {
    getListPost();
  }, [getListPost]);

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
