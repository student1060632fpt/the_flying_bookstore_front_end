"use client";
import ListOrder from "@/components/order/ListOrder";
import MenuProfile from "@/components/order/MenuProfile";
import { TabPanelProps } from "@mui/joy";
import {
  Box,
  Container,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import CustomTabPanel, { orderProps } from "../../../components/order/CustomTabPanel";


const Order = () => {
  const [value, setValue] = useState(0);
  const handleChange = (e: React.SyntheticEvent, newValue: number) =>
    setValue(newValue);
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Quản lý đơn hàng của tôi
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="order tab">
          <Tab label="Tât cả" {...orderProps(0)} />
          <Tab label="Đã đặt hàng" {...orderProps(1)} />
          <Tab label="Đã nhận" {...orderProps(2)} />
          <Tab label="Đã trả sách" {...orderProps(3)} />
          <Tab label="Đã quá hạn" {...orderProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ListOrder />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ListOrder />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ListOrder />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <ListOrder />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <ListOrder />
      </CustomTabPanel>
    </>
  );
};
export default Order;
