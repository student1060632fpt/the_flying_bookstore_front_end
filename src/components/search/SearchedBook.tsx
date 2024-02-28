import Image from "next/image";
import BookImage from "./../../assets/images/motthoangtarucroonhangian011.jpg";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
const SearchedBook = () => {
  return (
    <Link href="/detail#isbn">
      <div className="rounded-xl ease-in-out duration-300 hover:shadow-lg hover:shadow-indigo-500/40 py-5 px-3 ">
        <Image src={BookImage} alt="blt" className="border rounded-xl" />
        <h3 className="font-semibold text-lg text-primary my-2 truncate">
          MỘT THOÁNG TA RỰC RỠ Ở NHÂN GIAN
        </h3>

        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">5.000đ/ngày</p>
          <CiShoppingCart className="text-2xl mx-3" />
        </div>
      </div>
    </Link>
  );
};

export default SearchedBook;
