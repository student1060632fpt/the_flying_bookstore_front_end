import Image from "next/image";

import Book from "@/assets/images/book loading.gif";
import "./Category.scss"

const Category = ({name}: {name:string}) => {
  return (
    <div className=" text-center">
      <div className="mx-auto w-8/12">
        <Image
          src={Book}
          alt="Picture of the author"
          className="card-image"
        />
      </div>
      <h4 className="text-lg font-semibold py-3">{name}</h4>
    </div>
  );
};

export default Category;
