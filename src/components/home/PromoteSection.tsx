"use client";
import Image from "next/image";
import dayjs from "dayjs";
import Slider from "react-slick";
import PromoteBanner from "./../../assets/images/promote banner.svg";
import BookCardCarousel from "./Statistic/BookCardCarousel";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { IListing } from "@/types/book";
import { useListNewBookStore } from "@/hooks/listNewBook";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding: "60px",
};
dayjs.extend(customParseFormat);

const PromoteSection = () => {
  const listContent = useListNewBookStore((state) => state.listNewBook);
  const renderBooks = useCallback(() => {
    const listBook = listContent?.content
    if (!listBook) {
      return <p className="text-center">Hiện tại không có sách mới</p>;
    } else if (listBook.length != 0) {
      return (
        <Slider {...settings}>
          {listBook.map((book) => (
            <BookCardCarousel key={book.id} book={book} />
          ))}
        </Slider>
      );
    }
  }, [listContent]); // listBook là dependency
  return (
    <>
      <section className="promote relative overflow-hidden">
        <h3 className="text-3xl pt-8 pb-5 font-semibold text-center">
          Sách mới ra mắt
        </h3>
        <p className="text-sn text-center mb-8">
          Từ 24/9 đến {dayjs().format("DD/MM").toString()}
        </p>
        {renderBooks()}
        {/* background  */}
        <div
          className="absolute top-0 -z-10 overflow-hidden"
          aria-hidden="true"
        >
          <Image src={PromoteBanner} alt="Picture of the author" />
        </div>
      </section>
    </>
  );
};

export default PromoteSection;
