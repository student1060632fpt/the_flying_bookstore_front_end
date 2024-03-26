"use client";
import Slider from "react-slick";
import Category from "./Category";
import Link from "next/link";
import { useEffect, useState } from "react";

const BookCategory = () => {
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
  const [listCategory, setListCategory] = useState<any>();
  const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const getCategory = async () => {
    try {
      const response = await fetch("localhost:8082/api/genre/all", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      });

      if (response.ok) {
        // Registration successful, handle the response accordingly
        console.log(response);

        setListCategory(response);
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      // Handle any network or server errors
    }
  };
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="container mx-auto mt-10 mb-24">
      <h3 className="text-3xl pt-8 pb-10 font-semibold text-center">
        Danh mục sản phẩm
      </h3>
      <Slider {...settings}>
        {slides.map((slide) => (
          <Link href="/search#thieunhi" key={slide}>
            <Category name={"Thiếu nhi"} />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default BookCategory;
