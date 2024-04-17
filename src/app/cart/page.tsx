"use client";
import CartItem from "@/components/cart/CartItem";
import CartInfo from "@/components/cart/CartInfo";
import { useStoreCart } from "@/hooks/cart";
import { Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import EmptyImg from "@/assets/images/empty_cart_animation_loop.gif";

const Cart = () => {
  const cart = useStoreCart((state) => state.cart);
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-2xl font-semibold text-primary text-center">
        Giỏ hàng của bạn
      </h2>
      {!cart ? (
        <div className="mx-auto text-center flex flex-col mt-5 items-center">
          <Image src={EmptyImg} alt="empty cart" width={600}/>
          <p className="my-5 text-lg text-gray-700">
            Giỏ hàng của bạn đang trống
          </p>
          <Link href={"/"}>
            <Button variant="outlined">Quay lại trang chủ</Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="w-2/3 lg:w-3/4 md:w-full mx-auto flex flex-col gap-5 mt-10">
            <CartItem />
          </div>
          <div className="mt-10 w-2/3 lg:w-3/4 md:w-full mx-auto">
            <CartInfo />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
