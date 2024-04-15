"use client";
import Slider from "react-slick";
import Category from "./Category";
import Link from "next/link";
import { useEffect, useState } from "react";
type ICategory = {
  id: number;
  name: string;
  nameVn: string;
};

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
  const [listCategory, setListCategory] = useState<Array<ICategory>>();
  const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const getCategory = async () => {
    try {
      const response = await fetch("http://localhost:8082/api/genre", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      });

      if (response?.ok) {
        // Registration successful, handle the response accordingly
        const responseData = await response.json();

        setListCategory(responseData);
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
      {listCategory && (
        <Slider {...settings}>
          {listCategory.map((category, index) => (
            <Link href={`/search#${category.name}`} key={index}>
              <Category name={category.nameVn} />
            </Link>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default BookCategory;
