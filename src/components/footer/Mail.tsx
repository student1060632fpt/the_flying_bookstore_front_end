import { Button } from "@mui/material";
import React from "react";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
const Mail = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto columns-2 py-20">
        <h2 className="font-semibold text-white text-3xl">
          Nhập mail để nhận được những quà tặng đặc biệt nhé 🎁
        </h2>
        <div className="relative mt-2 rounded-md shadow-sm flex justify-end content-center">
          <input
            type="text"
            name="price"
            id="price"
            className="block w-8/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Nhập mail tại đây"
          />
          <Button variant="contained" color="secondary">
            <CardGiftcardIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Mail;
