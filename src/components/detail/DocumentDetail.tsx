import React from "react";

const DocumentDetail = () => {
  const listInfo = {
    "Ngày xuất bản": "01/05/2022",
    "Kích thước": "14.5x20.5cm",
    ISBN: "121341381648 (ISBN13: 121341381648)",
    "Số trang": "408 trang",
  };
  const listDocInfo = {
    "Tiền cọc": "78.000đ",
    "Phần trăm hư hại": "10%",
    "Mô tả về sách thuê": "Sách mới mua tháng 6/2023, tình trạng tốt",
    "Địa chỉ cho thuê": "123 Nguyễn Trọng Tuyển, phường 12, quận Bình Thạnh",
    "Phí phạt trả trễ": "3.000đ/ngày"
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
