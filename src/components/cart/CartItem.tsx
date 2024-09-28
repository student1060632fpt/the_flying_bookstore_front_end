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
import { useStoreAlert } from "../../hooks/alert";

const CartItem = ({ tabNum, isCheckout = false }: { tabNum: number, isCheckout?: boolean }) => {
  const { cart, removeCartBuy, removeCartRent } = useStoreCart();
  const [book, setBook] = useState<IListing>();
  const { callErrorAlert } = useStoreAlert(state => state);
  useEffect(() => {
    const callApiGetBookDetail = async () => {
      const bookId = tabNum == 1 ? cart.buy?.bookId : cart.rent?.bookId;
      if (!bookId)
        return;
      try {
        const newBook = await getBookDetailService(bookId.toString());
        if (typeof newBook !== 'string') {
          setBook(newBook);
        } else {
          callErrorAlert(newBook);
        }
      } catch (error) {
        console.log({ error });
      }
    }
    callApiGetBookDetail();
  }, [callErrorAlert, cart.buy?.bookId, cart.rent?.bookId, tabNum])
  return (
    <div className="p-5 gap-5 rounded-lg border flex flex-grow hover:shadow-lg hover:shadow-indigo-500/50 ease-in-out duration-200 rounded-lg">
      <BookDetailInfo book={book} />
      <div className="basis-3/12 flex-1  flex flex-col justify-center">
        {tabNum === 1 ? (
          <div className="flex justify-between">
            <p>Giá mua:</p>
            <p>{formatCurrency(book?.price)}</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between">
              <p>Giá thuê:</p>
              <p>{formatCurrency(book?.leaseRate)}/ngày</p>
            </div>
            <div className=" basis-1/5 flex justify-between text-gray-400 text-sm">
              <p>Cọc:</p>
              <p>{formatCurrency(book?.depositFee)}</p>
            </div>
          </>
        )}
      </div>
      {isCheckout?(<></>): (<div className="basis-1/12 flex  items-center">
        <IconButton onClick={tabNum == 1 ? removeCartBuy : removeCartRent} aria-label="delete" size="large">
          <CiTrash />
        </IconButton>
      </div>)}
      
    </div>
  );
};

export default CartItem;
