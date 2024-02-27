import Image from "next/image";
import BookImage from "./../../assets/images/motthoangtarucroonhangian011.jpg";
import { CiShoppingCart } from "react-icons/ci";
const SearchedBook = () => {
  return (
    <div className="rounded-xl ease-in-out duration-300 hover:shadow-lg hover:shadow-indigo-500/40 py-5 px-3 ">
      <Image src={BookImage} alt="blt" className="border" />
      <h3 className="font-semibold text-lg text-primary my-2">
        MỘT THOÁNG TA RỰC RỠ Ở NHÂN GIAN
      </h3>

      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">5.000đ/ngày</p>
        <CiShoppingCart className="text-2xl mx-3" />
      </div>
    </div>
  );
};

export default SearchedBook;
