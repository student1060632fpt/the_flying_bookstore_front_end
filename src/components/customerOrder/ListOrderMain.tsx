"use client";
import ListOrder from "@/components/order/ListOrder";
import {
  Box,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CustomTabPanel, { orderProps } from "../order/CustomTabPanel";
import { OrderType } from "../../types/order";

const arrSame: Array<{ label: string, index: number }> =[
  { label: "Tất cả", index: 0 },
  { label: "Đã đặt hàng", index: 1 },
  { label: "Đã nhận", index: 2 },
] 

const arrStatusBuySell: Array<{ label: string, index: number }> = [
  ...arrSame,
  { label: "Đã hủy", index: 3 },
];

const arrStatus: Array<{ label: string, index: number }> = [
  ...arrSame,
  { label: "Đã quá hạn", index: 3 },
  { label: "Đã trả sách", index: 4 },
  { label: "Đã hủy", index: 5 },
];
const ListOrderMain = ({ orderType}: { orderType: OrderType }) => {
  const [value, setValue] = useState(0);
  const handleChange = (_: any, newValue: number) => {
    setValue(newValue);
  }
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Quản lý đơn {orderType}
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="order tab">
          {arrStatus.map(({ label, index }) => {
            return <Tab label={label} {...orderProps(index)} key={index} />;
          })}
        </Tabs>
      </Box>
      {arrStatus.map(({ index }) => {
        return (
          <CustomTabPanel value={value} index={index} key={index}>
            <ListOrder status={index} changeStatus={handleChange} orderType={orderType} />
          </CustomTabPanel>
        );
      })}
    </>
  );
};
export default ListOrderMain;
