import { SITE_NAME } from "@/utils/env";
import { Metadata } from "next";

import CartItem from "@/components/cart/CartItem";
import CartInfo from "@/components/cart/CartInfo";

export const metadata: Metadata = {
  title: "My shopping cart | " + SITE_NAME,
};

const Cart = () => {
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-2xl font-semibold text-primary text-center">
        Giỏ hàng của bạn
      </h2>
      <div className="w-2/3 lg:w-3/4 md:w-full mx-auto flex flex-col gap-5 mt-10">
        <CartItem />
        <CartItem />
      </div>
      <div className="mt-10 w-2/3 lg:w-3/4 md:w-full mx-auto">
        <CartInfo />
      </div>
    </div>
  );
};

export default Cart;
