"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Box, Button, Stack, Typography } from "@mui/material";
import {
  IRowsPost2,
  convertDataToIRow,
} from "@/components/managerPost/column";
import DeletePostModal from "@/components/managerPost/DeletePostModal";
import { useAuthStore } from "@/hooks/user";

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

  const handleClose = () => {
    setModalDelete((state) => ({ ...state, open: false }));
  };
  const getListPost = async (): Promise<void> => {
    try {
      const response = await axios.request({
        url: "http://localhost:8082/api/listing/search/byOwnerId/" + profile?.id,
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
        
      </Box>
      <DeletePostModal handleClose={handleClose} modalDelete={modalDelete} getListPost={getListPost} />
    </>
  );
};

export default ManagerPost;
