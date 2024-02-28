"use client";
import { useState } from "react";
import Book1 from "./../../assets/images/book/G13ZDV5U.jpg";
import Book2 from "./../../assets/images/book/motthoangtarucroonhangian011.jpg";
import Book3 from "./../../assets/images/book/nhagiakimnew03.jpg";
import Book4 from "./../../assets/images/book/z4844965182997-6c13176c0737010a70742dc3f9b9179b-e1698997374668.jpg";
import Book5 from "./../../assets/images/book/z48544142804740f8a0bc6f3898ce3.jpg";
import Image from "next/image";
import "./BookGallery.scss";
import Slider from "react-slick";

const BookGallery = () => {
  const listImage = [Book1, Book2, Book3, Book4, Book5];
  const [currentImage, setCurrentImage] = useState(0);

  const handleChooseImage = (index: number) => setCurrentImage(index);
  return (
    <div>
      <div className="image-cover">
        <Image src={listImage[currentImage]} alt="book" fill />
      </div>
      <div className="flex justify-center">
        <div className="flex columns-5 gap-2 mt-2">
          {listImage.map((img, index) => (
            <Image
              onClick={() => handleChooseImage(index)}
              src={img}
              key={index}
              alt="book"
              className="image-book"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookGallery;
