"use client";
import { PiCreditCardLight } from "react-icons/pi";
import { PiHandshakeLight } from "react-icons/pi";
import "./Step.scss";
import MomoLogo from "./../../assets/images/MoMo_Logo.png";
import Image from "next/image";
import { useState } from "react";
import { VNPay } from "vnpay";
import { Button } from "@mui/material";
import { useStoreCart } from "@/hooks/cart";
import dayjs from "dayjs";
import { useAuthStore } from "@/hooks/user";
import { redirect } from "next/navigation";
import Link from "next/link";
const vnpay = new VNPay({
  tmnCode: "8P19JVPK",
  secureSecret: "KDWIRZHZVFCMABESTHVTOQONWXASFYXI",
  vnpayHost: "https://sandbox.vnpayment.vn",
});

const Pay = () => {
  const [payType, setPayType] = useState(0);
  const { cart } = useStoreCart();
  const { profile } = useAuthStore();
  const urlString = vnpay.buildPaymentUrl({
    vnp_Amount: cart?.total || 0,
    vnp_IpAddr: "1.1.1.1",
    vnp_TxnRef: dayjs().format("x"),
    vnp_OrderInfo: `Cho userid ${profile?.id} thue sach voi so tien ${cart?.total}`,
    vnp_OrderType: "other",
    vnp_ReturnUrl: `http://localhost:3000/checkout`,
  });
  const handleSubmit = () => {
    console.log({ urlString });

    // redirect(urlString)
  };
  const renderPayType = () => {
    switch (payType) {
      case 0:
        return (
          <p className="mt-5">
            Bạn sẽ đưa tiền mặt 100.000đ khi gặp người cho thuê sách
          </p>
        );
      case 1:
        return (
          <>
            <p className="mt-5">Trạng thái: chưa thanh toán</p>
          </>
        );
      case 2:
        return (
          <>
            <p className="my-5">Trạng thái: chưa thanh toán</p>
            <Link href={urlString}>
              <Button variant="outlined" onClick={handleSubmit}>
                Chuyển đến trang thanh toán của Napas
              </Button>
            </Link>
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
          <Image src={MomoLogo} alt="momo" className="icon" />
          <p className="">Thanh toán Momo</p>
        </div>
      </div>
      {renderPayType()}
    </div>
  );
};

export default Pay;
