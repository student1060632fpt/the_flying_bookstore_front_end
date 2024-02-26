import Image from "next/image";
import React from "react";
import Book from "./../../assets/images/book/G13ZDV5U.jpg";

const BookCardCarousel = ({ imgSrc }: { imgSrc?: string }) => {
  return (
    <Image
      src={imgSrc || Book}
      alt="Picture of the author"
      className="mx-auto justify-center bottom-0 w-8/12"
    />
  );
};

export default BookCardCarousel;
