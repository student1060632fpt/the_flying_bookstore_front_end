"use client";
import {  useState } from "react";
import Link from "next/link";
import { Box, Button, Stack, Typography } from "@mui/material";

const ManagerPost = () => {




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

    </>
  );
};

export default ManagerPost;
