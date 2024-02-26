import Image from "next/image";
import React from "react";
import Book from "./G13ZDV5U.jpg";
import { Button } from "@mui/material";
import { CiShoppingCart } from "react-icons/ci";
const BookCardCarousel = ({ imgSrc }: { imgSrc?: string }) => {
  return (
    <div className="text-center mb-5">
      <Image
        src={imgSrc || Book}
        alt="Picture of the author"
        className="mx-auto bottom-0 w-8/12"
      />
      <h4 className="text-xl font-semibold py-3">Tục ngữ phong dao</h4>
      <p className="pb-3 text-sm text-secondary">3.000đ/ngày</p>
      <Button variant="contained" color="secondary" startIcon={<CiShoppingCart />} sx={{color: "white", textTransform: "none"}}>Thêm vào giỏ hàng</Button>
    </div>
  );
};

export default BookCardCarousel;
