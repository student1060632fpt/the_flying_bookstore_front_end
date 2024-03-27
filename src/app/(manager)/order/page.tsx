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

const a11yProps = (index: number) => {
  return {
    id: `order-tab-${index}`,
    "aria-controls": `order-tabpanel-${index}`,
  };
};
interface CustomTabPanelProps extends TabPanelProps {
  index: number;
}

const CustomTabPanel = (props: CustomTabPanelProps) => {
  const { children, value, index, ...other } = props;
  // Rest of the code...
  return (
    <div
      role="tabpanel"
      hidden={value != index}
      id={`order-tabpanel-${index}`}
      aria-labelledby={`order-tab-${index}`}
      {...other}
    >
      {value == index && <Box sx={{ mt: 2 }}>{children}</Box>}
    </div>
  );
};

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
          <Tab label="Tât cả" {...a11yProps(0)} />
          <Tab label="Đã đặt hàng" {...a11yProps(1)} />
          <Tab label="Đã nhận" {...a11yProps(2)} />
          <Tab label="Đã trả sách" {...a11yProps(3)} />
          <Tab label="Đã quá hạn" {...a11yProps(4)} />
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
