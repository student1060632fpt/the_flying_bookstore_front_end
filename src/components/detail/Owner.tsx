import Image from "next/image";
import Avatar from "./../../assets/images/avatar.jpg";
import { Rating } from "@mui/material";
import { FaStar } from "react-icons/fa";
import { IPropsBook } from "./DocumentInfo";

const Owner = ({book}:IPropsBook) => {
  return (
    <div className="border py-4 px-6">
      <h3 className="text-primary font-semibold text-xl">Chủ sách</h3>
      <div className="flex items-center gap-3 mt-3">
        <div className="relative w-16 h-16">
          <Image src={Avatar} alt="ava" fill className="rounded-lg" />
        </div>
        <div className="">
          <h5 className="font-semibold mb-1">Hòa Nguyễn</h5>
          <div className="flex">
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              readOnly
              size="small"
              emptyIcon={<FaStar className="" fontSize="inherit" />}
              icon={<FaStar className="" fontSize="inherit" />}
            />
            <p className="text-sm text-gray-500 ml-2">(4 sao)</p>
          </div>
        </div>
      </div>
      <div className="mt-3 flex justify-between">
        <p className="text-primary">Số sách hiện có</p>
        <p className="font-semibold">{book?.bookOwned}</p>
      </div>
      
      <div className="mt-3 flex justify-between">
        <p className="text-primary">Số sách đang cho thuê</p>
        <p className="font-semibold">{book?.bookLeasing}</p>
      </div>
      
    </div>
  );
};

export default Owner;
