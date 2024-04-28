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
import CustomTabPanel, {
  orderProps,
} from "../../../../components/order/CustomTabPanel";

const arrStatus = [
  { label: "Tất cả", index: 0 },
  { label: "Đã đặt hàng", index: 1 },
  { label: "Đã nhận", index: 2 },
  { label: "Đã trả sách", index: 3 },
  { label: "Đã quá hạn", index: 4 },
  { label: "Đã hủy", index: 5 },
];
const Order = () => {
  const [value, setValue] = useState(0);
  const handleChange = (_:any, newValue: number) =>
    setValue(newValue);
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Quản lý đơn hàng của tôi
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="order tab">
          {arrStatus.map(({ label, index }) => {
            return <Tab label={label} {...orderProps(index)} key={index} />;
          })}
        </Tabs>
      </Box>
      {arrStatus.map(({ label, index }) => {
        return (
          <CustomTabPanel value={value} index={index} key={index}>
            <ListOrder status={index} changeStatus={handleChange} />
          </CustomTabPanel>
        );
      })}
    </>
  );
};
export default Order;
