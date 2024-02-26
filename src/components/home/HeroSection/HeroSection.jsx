import React from "react";
import "./HeroSection.scss";
import { AiOutlineBarChart } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoIosNotifications } from "react-icons/io";
import TeenGirlImage from "./../../../assets/images/teenage-girl.png";
import BackgroundBanner from "./../../../assets/images/backgroud-banner.svg";
// import { NavLink } from "react-router-dom";
import Image from "next/image";
import { Chip } from "@mui/material";
export default function HeroSection() {
  return (
    <section className="hero container mx-auto grid grid-cols-2 gap-4">
      <div className="max-w-2xl py-12 sm:py-32 lg:py-48">
        <p className="text-lg sellest text-secondary mb-6">BÁN CHẠY</p>
        <div className="text-left">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Danh nhân Việt Nam
          </h1>
          <div className="flex mt-3 mb-5">
            <p className="text-lg text-primary mr-5">Doãn Kế Thiện</p>
            <p className="text-lg text-primary ">#Văn học Việt Nam</p>
          </div>
          <div className="description border-l-2">
            <p className="ml-5 mt-6 text-lg leading-8 text-gray-600">
              Những câu chuyện về các danh nhân nước Việt. Đó là chuyện về
              Nguyễn Công Trứ ngang tàng mà suốt đời lận đận vì dân vì nước,
              chuyện về Trạng Bùng Phùng Khắc Khoan đấu trí với ngoại bang để
              không làm mất thể diện nước nhà, chuyện về Nguyễn Văn Giai đến
              tranh hôn để trả nghĩa người con gái năm xưa,…
            </p>
          </div>
          <div className="my-10 flex items-center justify-start gap-x-6">
            <a
              href="#"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Thuê ngay
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Xem chi tiết <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="flex items-center">
            <h3 className="text-3xl font-bold sm:text-4xl">5.000đ/ngày</h3>
            <span className="text-base text-primary mx-5 line-through">71.000đ</span>
            <Chip color="error" label="giảm 20%" />
          </div>
        </div>
      </div>
      <div className="relative h-full">
        <Image
          src={TeenGirlImage}
          alt="Picture of the author"
          className="absolute bottom-0 w-10/12"
        />
      </div>
      <div className="absolute top-0 -z-10 overflow-hidden" aria-hidden="true">
        <Image src={BackgroundBanner} alt="Picture of the author" />
      </div>
    </section>
  );
}
