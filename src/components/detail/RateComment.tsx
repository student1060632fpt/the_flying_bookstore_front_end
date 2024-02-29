import { Rating } from "@mui/material";
import Image from "next/image";
import React from "react";
import Avatar from "./../../assets/images/avatar.jpg";
import { FaStar } from "react-icons/fa";


const RateComment = () => {
  return (
    <div className=" flex border rounded-lg p-5 w-full items-center">
      <div className="relative w-24 h-24">
        <Image src={Avatar} alt="ava" fill className="rounded-full" />
      </div>
      <div className="border-l pl-5 ml-5">
        <h4 className="text-lg font-semibold">Nguyễn Thảo</h4>
        <p className="text-gray-600 mt-2 text-sm">
          Sách đẹp. <br />
          Mình thích nhỏ xinh nên chọn lấy nhỏ. <br />
          Nhưng sách dễ mở, dễ đọc không lo bị lẹm chữ hay khó đọc phần gáy đâu
          nha mọi người
        </p>
        <div className="flex items-center mt-3">
          <Rating
            name="half-rating-read"
            defaultValue={4.5}
            readOnly
            size="small"
            emptyIcon={<FaStar className="" fontSize="inherit" />}
            icon={<FaStar className="" fontSize="inherit" />}
          />
          <p className="text-gray-400 text-sm ml-2 mr-3">4.5 sao</p>
          <h5 className="text-sm border-l pl-3">23/12/2023</h5>
        </div>
      </div>
    </div>
  );
};

export default RateComment;
