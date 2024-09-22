"use client";
import Image from "next/image";
import { IconButton } from "@mui/material";
import { CiTrash } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useStoreCart } from "@/hooks/cart";
import { formatCurrency } from "@/utils/helps";
import { getBookDetailService } from "../../api/bookListService";
import { IListing } from "../../types/book";
import BookDetailInfo from "./BookDetailInfo";

const CartItemBuy = () => {
  const { cart, removeCartBuy } = useStoreCart();
  const [book, setBook] = useState<IListing>();
  const bookId = cart.buy?.bookId;
  useEffect(() => {
    const callApiGetBookDetail = async () => {
      if (!bookId)
        return;
      try {
        const newBook = await getBookDetailService(bookId.toString());
        console.log({ newBook });
        if (newBook) {
          setBook(newBook);
        }
      } catch (error) {
        console.log({ error });
      }
    }
    callApiGetBookDetail();
  }, [bookId])

  return (
    <div className="p-5 gap-5 rounded-lg border flex flex-grow hover:shadow-lg hover:shadow-indigo-500/50 ease-in-out duration-200 rounded-lg">
      <BookDetailInfo book={book}/>
      <div className="basis-3/12 flex-1  flex flex-col justify-center">
        <div className="flex justify-between">
          <p>Giá mua:</p>
          <p>{formatCurrency(book?.price)}</p>
        </div>
      </div>
      <div className="basis-1/12 flex  items-center">
        <IconButton onClick={removeCartBuy} aria-label="delete" size="large">
          <CiTrash />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItemBuy;
