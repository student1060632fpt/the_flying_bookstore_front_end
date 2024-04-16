"use client";
import Image from "next/image";
import Book from "./../../assets/images/motthoangtarucroonhangian011.jpg";
import Quality from "@/components/detail/Quality";
import { IconButton } from "@mui/material";
import { CiTrash } from "react-icons/ci";
import { useState } from "react";
import { FiCircle } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";
import { useStoreCart } from "@/hooks/cart";
import { formatCurrency } from "@/utils/helps";

const CartItem = () => {
  const { cart, removeCart } = useStoreCart();

  const [choose, setChoose] = useState<boolean>(false);
  return (
    <div className="p-5 gap-5 rounded-lg border flex flex-grow hover:shadow-lg hover:shadow-indigo-500/50 ease-in-out duration-200 rounded-lg">
      <div className="basis-2/12 relative w-32 h-48">
        <Image fill src={Book} alt="d" className="object-cover rounded-lg" />
      </div>
      <div className="basis-4/12 flex flex-col justify-center">
        <h4 className="text-primary font-semibold text-lg">
          {cart?.book.book.title}
        </h4>
        <p className="text-sm text-gray-500 ">{cart?.book.book.authors}</p>
      </div>
      <div className="basis-2/12 flex flex-col justify-center">
        <p className="mb-2">Số lượng: 1</p>
      </div>
      <div className="basis-3/12 flex-1  flex flex-col justify-center">
        <div className="flex justify-between">
          <p>Giá thuê:</p>
          <p>{formatCurrency(cart?.totalRent)}</p>
        </div>
        <div className=" basis-1/5 flex justify-between text-gray-400 text-sm">
          <p>Cọc:</p>
          <p>{formatCurrency(cart?.book.depositFee)}</p>
        </div>
      </div>
      <div className="basis-1/12 flex  items-center">
        <IconButton onClick={removeCart} aria-label="delete" size="large">
          <CiTrash />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
