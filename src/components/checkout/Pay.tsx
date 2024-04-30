"use client";
import { PiCreditCardLight } from "react-icons/pi";
import { PiHandshakeLight } from "react-icons/pi";
import "./Step.scss";
import MomoLogo from "./../../assets/images/vnpay.png";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { VNPay } from "vnpay";
import { Button } from "@mui/material";
import { useStoreCart } from "@/hooks/cart";
import dayjs from "dayjs";
import { useAuthStore } from "@/hooks/user";
import { redirect } from "next/navigation";
import Link from "next/link";
import { formatCurrency } from "@/utils/helps";
import QRcode from "@/assets/images/qr_checkout.png";
import { useFormContext } from "react-hook-form";
import { useRouter } from "next/navigation";

const Pay = ({
  payType,
  setPayType,
}: {
  payType: number;
  setPayType: Dispatch<SetStateAction<number>>;
}) => {
  const { cart } = useStoreCart();

  const renderPayType = () => {
    switch (payType) {
      case 0:
        return (
          <>
            <p className="my-5">
              Bạn sẽ đưa {formatCurrency(cart?.total)} cho công ty Flying
              Bookstore tại địa chỉ 171/11 Trương Phước Phan, quận Bình Tân,
              tp.HCM
            </p>
          </>
        );
      case 1:
        return (
          <>
            <h4 className="text-xl my-5 font-semibold">Bước 1: Thanh toán</h4>
            <h4 className="text-md">
              Cách 1: Bạn có thể quét mã qr ở dưới đây:
            </h4>
            <Image src={QRcode} alt="qr" className="w-1/2" />
            <h4 className="text-md mt-5">
              Cách 2: Bạn chuyển khoản theo thông tin sau:
            </h4>
            <p className="text-md text-gray-600 mt-3">
              Số tài khoản: 0004100030828002 <br />
              Chủ tài khoản: NGUYEN LE XUAN HOA
              <br />
              Ngân hàng: Thương mại cổ phần Phương Đông-OCB
              <br />
              Chi nhánh: PGD LÝ THƯỜNG KIỆT
              <br />
              Tỉnh/TP: TP.Hồ Chí Minh
            </p>
            <h4 className="text-xl my-5 font-semibold">
              Bước 2: Tin nhắn chuyển khoản theo cú pháp: 
            </h4>
            <p className="text-md text-gray-600 mt-3">
            &lt;Tên khách hàng&gt;_&lt;Tổng tiền&gt;_Thanh toán cọc sách
            </p>
            <h4 className="text-xl my-5 font-semibold">
              Bước 3: Chờ quản trị xác nhận
            </h4>
          </>
        );
      case 2:
        return (
          <>
            <p className="my-5">
              Nhấn nút Tạo đơn hàng để đến trang thanh toán VNPay
            </p>
          </>
        );
      default:
        break;
    }
  };

  return (
    <div className="">
      <div className="pay ">
        <div
          className={`pay-card ${payType == 0 && "choose"}`}
          onClick={() => setPayType(0)}
        >
          <PiHandshakeLight className="icon" />
          <p className="">Đưa tiền trực tiếp</p>
        </div>
        <div
          className={`pay-card ${payType == 1 && "choose"}`}
          onClick={() => setPayType(1)}
        >
          <PiCreditCardLight className="icon" />
          <p className="">Chuyển khoản</p>
        </div>
        <div
          className={`pay-card ${payType == 2 && "choose"}`}
          onClick={() => setPayType(2)}
        >
          <Image
            src={MomoLogo}
            alt="momo"
            className="mx-auto mb-2"
            width={65}
          />
          <p className="">Thanh toán VNPay</p>
        </div>
      </div>
      {renderPayType()}
    </div>
  );
};

export default Pay;
