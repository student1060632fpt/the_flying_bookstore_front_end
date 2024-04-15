"use client";
import Image from "next/image";
import dayjs from "dayjs";
import Slider from "react-slick";
import PromoteBanner from "./../../assets/images/promote banner.svg";
import BookCardCarousel from "./Statistic/BookCardCarousel";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { chunkArray } from "@/utils/helps";
import { IBook } from "../createPost/ModalSearchBook";
import customParseFormat from "dayjs/plugin/customParseFormat";

let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "http://localhost:8082/api/listing/search",
  headers: {},
};
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
  const [listBook, setListBook] = useState<Array<IListing>>([]);

  const callApi = () => {
    axios
      .request(config)
      .then((response) => {
        if (response?.data) {
          // const newSliceArray = chunkArray(response?.data, 20);
          setListBook(prevListBook => [...prevListBook, ...response?.data?.content]);
          console.log(response?.data?.content, "response?.data?.content");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    callApi();
  }, []);
  const renderBooks = useCallback(() => {
    if (listBook.length === 0) {
      return <p className="text-center">Hiện tại không có sách mới</p>;
    } else {
      return (
        <Slider {...settings}>
          {listBook.map((book) => (
            <BookCardCarousel key={book.id} book={book} />
          ))}
        </Slider>
      );
    }
  }, [listBook]); // listBook là dependency
  return (
    <>
      <section className="promote relative overflow-hidden">
        <h3 className="text-3xl pt-8 pb-5 font-semibold text-center">
          Sách mới ra mắt
        </h3>
        <p className="text-sn text-center mb-8">
          Từ 24/2 đến {dayjs().format("DD/MM").toString()}
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
export type IListing = {
  id: number;
  ownerId: number | null;
  quantity: number;
  address: string;
  expiryDate: string | null;
  leaseRate: number;
  depositFee: number;
  penaltyRate: number;
  description: string;
  copy: ICopy;
  book: IBook;
};

interface ICopy {
  id: number;
  bookId: number;
  ownerId: number | null;
  quantity: number;
  imageLink: string;
  damagePercent: number;
  createdDate: string | null;
  updatedDate: string | null;
  deletedDate: string | null;
  copyStatus: "LEASED" | "AVAILABLE"; // Assuming these are the only possible values for copy status
}
