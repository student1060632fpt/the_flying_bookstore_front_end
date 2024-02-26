import Image from "next/image";
import React from "react";
import Book from "./hoangtube.jpg";
import "./Category.scss"

const Category = () => {
  return (
    <div className="border text-center">
      <div className="mx-auto w-8/12">
        <Image
          src={Book}
          alt="Picture of the author"
          className="card-image"
        />
      </div>
      <h4 className="text-lg font-semibold py-3">Thiếu nhi</h4>
    </div>
  );
};

export default Category;
