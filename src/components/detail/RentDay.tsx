"use client";
import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Button } from "@mui/material";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";

const RentDay = () => {
  return (
    <>
      <div className="border-y py-5">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker sx={{ width: "100%", mb: 2 }} label="Ngày nhận" />
          <DatePicker sx={{ width: "100%" }} label="Ngày trả" />
        </LocalizationProvider>
      </div>

      <div className="flex flex-col gap-2 border-b pt-3 pb-2">
        <div className="columns-2">
          <p className="text-sm">Giá thuê</p>
          <p className="font-semibold text-right">5.000đ/ngày</p>
        </div>
        <div className="columns-2">
          <p className="text-sm">Số ngày thuê</p>
          <p className="font-semibold text-right">4</p>
        </div>
        {/* <div className="columns-2">
          <p className="text-sm">Số lượng sách</p>
          <p className="font-semibold text-right">1</p>
        </div> */}
      </div>
      <div className="columns-2 mt-3">
        <p className="text-sm">Tổng tiền thuê</p>
        <p className="font-semibold text-right">30.000đ</p>
      </div>
      <div className="columns-2 border-b py-3">
        <p className="text-sm">Tiền cọc</p>
        <p className="font-semibold text-right">70.000đ</p>
      </div>
      <div className="columns-2 my-2">
        <p className="font-semibold text-lg">Tổng tiền</p>
        <p className="font-semibold text-right text-lg">100.000đ</p>
      </div>
      <Link href="/cart">
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ width: "100%", color: "white" }}
          startIcon={<CiShoppingCart />}
        >
          Đặt thuê ngay
        </Button>
      </Link>
    </>
  );
};

export default RentDay;
