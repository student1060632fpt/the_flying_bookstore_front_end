import Image from "next/image";
import BookImage from "./../../assets/images/motthoangtarucroonhangian011.jpg";
import Link from "next/link";

const BookItem = () => {
  return (
    <div className="hover:shadow-lg hover:shadow-indigo-500/50 ease-in-out duration-200 p-3 rounded-lg book flex justify-between align-center  mt-5 gap-5">
      <div className="flex">
        <div className="relative w-32 h-48 mr-6">
          <Link href="/detail#isbn">
            <Image
              src={BookImage}
              alt="book"
              fill
              className="object-cover rounded-lg"
            />
          </Link>
        </div>
        <div className="flex flex-col  justify-center">
          <Link href="/detail#isbn">
            <h5 className="text-lg font-semibold">Một thoáng rực rỡ</h5>
          </Link>
          <p className="text-sm text-gray-400">Ocean Vuong</p>
        </div>
      </div>
      <div className="flex items-center ">
        <p className="text-sm mr-3">Số lượng: </p>
        <p className="text-sm text-gray-400">1</p>
      </div>
      <div className="flex flex-col  justify-center">
        <div className="flex justify-between">
          <p className="text-sm mr-8">Giá thuê: </p>
          <p className="text-sm text-gray-400">20.000đ</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm">Cọc: </p>
          <p className="text-sm text-gray-400">40.000đ</p>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
