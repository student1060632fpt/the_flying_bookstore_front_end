import React from "react";
import { IPropsBook } from "./DocumentInfo";
import dayjs from "dayjs";
import { formatCurrency } from "@/utils/helps";

const DocumentDetail = ({book}:IPropsBook) => {
  const listInfo = {
    "Ngày xuất bản": dayjs(book?.book?.publishedDate).format("DD/MM/YYYY"),
    "Kích thước": book?.book.size,
    ISBN: book?.book?.isbn,
    "Số trang": book?.book?.pageCount,
  };
  const listDocInfo = {
    "Tiền cọc": formatCurrency(book?.depositFee),
    "Phần trăm hư hại": book?.copy?.damagePercent,
    "Địa chỉ cho thuê": book?.address,
    "Phí phạt trả trễ": formatCurrency(book?.depositFee)+"/ngày"
  }
  return (
    <div className="flex flex-col">
      <h4 className="font-semibold mb-3">Thông tin chung về sách</h4>
      <div className="border rounded-lg mb-5">
        {Object.entries(listInfo).map(([key, value]) => (
          <div className="flex flex-row py-4 px-3 border-b" key={key}>
            <div className="basis-1/3 font-semibold">{key}</div>
            <div className="flex-1">{value}</div>
          </div>
        ))}
      </div>
      <h4 className="font-semibold mb-3">Thông tin về sách thuê</h4>
      <div className="border rounded-lg">
        {Object.entries(listDocInfo).map(([key, value]) => (
          <div className="flex flex-row py-4 px-3 border-b" key={key}>
            <div className="basis-1/3 font-semibold">{key}</div>
            <div className="flex-1">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentDetail;
