"use client";
import { useState } from "react";
import "./BookGallery.scss";
import { FiCircle } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";
import { Button } from "@mui/material";
import { CiShoppingCart } from "react-icons/ci";


const RentCombo = () => {
  const [value, setvalue] = useState(0);
  const listCombo = [
    { day: 35, price: 10000 },
    { day: 60, price: 20000 },
    { day: 88, price: 30000 },
  ];
  return (
    <>
      <div className="flex flex-col gap-3 border-t pt-5">
        {listCombo.map((item, index) => (
          <div
            key={index}
            onClick={() => setvalue(index)}
            className="border-2 rounded-xl flex p-3 hover:shadow-lg hover:shadow-blue-500/50 ease-in-out duration-200 justify-between items-center"
          >
            <div className="flex gap-3 items-center">
              {value == index ? (
                <FiCheckCircle className="text-2xl" />
              ) : (
                <FiCircle className="text-2xl" />
              )}
              <div className="">
                <p className="text-md">{item.day} ngày</p>
                <p className="text-xs text-gray-400">Trả ngày 30/10/2024</p>
              </div>
            </div>
            <div className="text-right">

            <p className="font-bold">{item.price}đ</p>
            <p className="text-xs text-gray-300">~1.000đ/ngày</p>
            </div>
          </div>
        ))}
      </div>
      <div className="columns-2 mt-5 pt-3 border-t">
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
      <Button
        variant="contained"
        color="secondary"
        size="large"
        sx={{ width: "100%", color: "white" }}
        startIcon={<CiShoppingCart />}
      >
        Đặt thuê ngay
      </Button>
    </>
  );
};

export default RentCombo;
