"use client";
import Image from "next/image";
import BookImg from "./../../assets/images/loading-book.gif";
import { IconButton } from "@mui/material";
import { CiTrash } from "react-icons/ci";
import { useStoreCart } from "@/hooks/cart";
import { formatCurrency } from "@/utils/helps";
import BookDetailInfo from "./BookDetailInfo";

const CartItemRent = () => {
  const { cart, removeCartRent } = useStoreCart();
  const book = cart.rent?.book;
  return (
    <div className="p-5 gap-5 rounded-lg border flex flex-grow hover:shadow-lg hover:shadow-indigo-500/50 ease-in-out duration-200 rounded-lg">
      <BookDetailInfo book={book} />
      <div className="basis-3/12 flex-1  flex flex-col justify-center">
        <div className="flex justify-between">
          <p>Giá thuê:</p>
          <p>{formatCurrency(cart.rent?.totalRent)}</p>
        </div>
        <div className=" basis-1/5 flex justify-between text-gray-400 text-sm">
          <p>Cọc:</p>
          <p>{formatCurrency(book?.depositFee)}</p>
        </div>
      </div>
      <div className="basis-1/12 flex  items-center">
        <IconButton onClick={removeCartRent} aria-label="delete" size="large">
          <CiTrash />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItemRent;
