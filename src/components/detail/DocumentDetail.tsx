import React from "react";

const DocumentDetail = () => {
  const listInfo = {
    "Ngày xuất bản": "01/05/2022",
    "Kích thước": "14.5x20.5cm",
    "ISBN": "121341381648 (ISBN13: 121341381648)",
    "Số trang": "408 trang",
    "Tiền cọc": "78.000đ",
    "Mô tả về sách thuê": "Sách mới mua tháng 6/2023",
    "Địa chỉ cho thuê": "123 Nguyễn Trọng Tuyển, phường 12, quận Bình Thạnh",
  };
  return (
    <div className="border rounded-lg">
      {Object.entries(listInfo).map(([key, value]) => (
        <div className="flex flex-row py-4 px-3 border-b" key={key}>
          <div className="basis-1/3 font-semibold">{key}</div>
          <div className="flex-1">{value}</div>
        </div>
      ))}
    </div>
  );
};

export default DocumentDetail;
