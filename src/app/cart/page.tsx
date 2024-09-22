"use client";
import CartInfo from "@/components/cart/CartInfo";
import { useStoreCart } from "@/hooks/cart";
import { Box, Button, Tab, Tabs } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import EmptyImg from "@/assets/images/empty_cart_animation_loop.gif";
import { useState } from "react";
import { a11yProps } from "../../utils/helps";
import CustomTabPanel from "../../components/order/CustomTabPanel";
import CartItemRent from "../../components/cart/CartItemRent";
import CartItemBuy from "../../components/cart/CartItemBuy";

const Cart = () => {
  const [tabNum, setTabNum] = useState(1);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabNum(newValue);
  };
  const renderEmptyCard = () => {
    return (<div className="mx-auto text-center flex flex-col mt-5 items-center">
      <Image src={EmptyImg} alt="empty cart" width={600} unoptimized />
      <p className="my-5 text-lg text-gray-700">
        Giỏ hàng của bạn đang trống
      </p>
      <Link href={"/"}>
        <Button variant="outlined">Quay lại trang chủ</Button>
      </Link>
    </div>);
  }
  const cart = useStoreCart((state) => state.cart);
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-2xl font-semibold text-primary text-center">
        Giỏ hàng của bạn
      </h2>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: 'fit-content', mx: 'auto', mt: 1 }}>
        <Tabs value={tabNum} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Sách thuê" {...a11yProps(0)} />
          <Tab label="Sách mua" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={tabNum} index={0}>
        {!cart.rent ? renderEmptyCard() : (
          <>
            <div className="w-2/3 lg:w-3/4 md:w-full mx-auto flex flex-col gap-5 mt-10">
              <CartItemRent />
            </div>
            <div className="mt-10 w-2/3 lg:w-3/4 md:w-full mx-auto">
              <CartInfo />
            </div>
          </>
        )}
      </CustomTabPanel>
      <CustomTabPanel value={tabNum} index={1}>
         {!cart.buy ? renderEmptyCard() : (
          <>
            <div className="w-2/3 lg:w-3/4 md:w-full mx-auto flex flex-col gap-5 mt-10">
              <CartItemBuy />
            </div>
            <div className="mt-10 w-2/3 lg:w-3/4 md:w-full mx-auto">
              <CartInfo />
            </div>
          </>
        )}
      </CustomTabPanel>

    </div>
  );
};

export default Cart;
