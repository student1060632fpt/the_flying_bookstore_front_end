"use client";
import Image from "next/image";
import Book from "./../../assets/images/motthoangtarucroonhangian011.jpg";
import Quality from "@/components/detail/Quality";
import { IconButton } from "@mui/material";
import { CiTrash } from "react-icons/ci";
import { useState } from "react";
import { FiCircle } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";

const CartItem = () => {
  const [choose, setChoose] = useState<boolean>(false);
  return (
    <div className="p-5 gap-5 rounded-lg border flex hover:shadow-lg hover:shadow-indigo-500/50 ease-in-out duration-200 rounded-lg">
      <div className="flex  items-center">
        <IconButton aria-label="delete" size="large" onClick={() => setChoose(state=>!state)}>
          {!!choose? <FiCheckCircle className="text-2xl text-primary" />: <FiCircle className="text-2xl text-primary" />}
        </IconButton>
      </div>
      <div className="relative w-32 h-48">
        <Image fill src={Book} alt="d" className="object-cover rounded-lg" />
      </div>
      <div className=" flex flex-col justify-center">
        <h4 className="text-primary font-semibold text-lg">
          Một thoáng ta rực rỡ ở nhân gian
        </h4>
        <p className="text-sm text-gray-500 ">Ocean Vương</p>
      </div>
      <div className=" flex flex-col justify-center">
        <p className="mb-2">Số lượng</p>
        <Quality />
      </div>
      <div className="flex-1  flex flex-col justify-center">
        <div className="flex justify-between">
          <p>Giá thuê:</p>
          <p>20.000đ</p>
        </div>
        <div className="flex justify-between text-gray-400 text-sm">
          <p>Cọc:</p>
          <p>20.000đ</p>
        </div>
      </div>
      <div className="flex  items-center">
        <IconButton aria-label="delete" size="large">
          <CiTrash />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
