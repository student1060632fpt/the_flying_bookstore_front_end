"use client";
import Slider from "react-slick";
import Category from "./Category";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useGenreStore } from "@/hooks/genre";
export interface ICategory {
  id: number;
  name: string;
  nameVn: string;
  createdDate: string;
  updatedDate: string | null;
  deletedDate: string | null;
}

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
const BookCategory = () => {
  const {listGenre: listCategory} = useGenreStore();
  
  const renderCategory = useCallback(
    () => {
      if(!listCategory) return (<p className="text-center"> </p>)
      return (
        <Slider {...settings}>
          {listCategory.map((category, index) => (
            <Link href={`/search/category/${category.name}`} key={index}>
              <Category category={category} />
            </Link>
          ))}
        </Slider>
      )
    },
    [listCategory] // Include 'settings' in the dependency array
  );

  return (
    <div className="container mx-auto mt-10 mb-24">
      <h3 className="text-3xl pt-8 pb-10 font-semibold text-center">
        Danh mục sản phẩm
      </h3>
      {renderCategory()}
    </div>
  );
};

export default BookCategory;
