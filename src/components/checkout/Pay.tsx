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
import { formatCurrency } from "@/utils/helps";
import QRcode from "@/assets/images/qr_checkout.png"

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
    vnp_TxnRef: dayjs().valueOf().toPrecision(),
    vnp_OrderInfo: `Cho userid ${profile?.id} thue sach voi so tien ${cart?.total}`,
    vnp_OrderType: "other",
    vnp_ReturnUrl: `http://localhost:3000/checkout`,
  });

  const renderPayType = () => {
    switch (payType) {
      case 0:
        return (
          <>
            <p className="my-5">
              Đầu tiên bạn sẽ đưa tiền cọc{" "}
              {formatCurrency(cart?.book.depositFee)} cho công ty Flying
              Bookstore tại địa chỉ 171/11 Trương Phước Phan, quận Bình Tân,
              tp.HCM
            </p>

            <p className="">
              Bạn sẽ đưa tiền thuê sách {formatCurrency(cart?.totalRent)} khi
              gặp {cart?.book?.user?.firstName}
            </p>
          </>
        );
      case 1:
        return (
          <>
          h3.text-
            <h4 className="text-md mt-5">
              Cách 1: Bạn có thể quét mã qr ở dưới đây:
            </h4>
            <Image src={QRcode} alt="qr" className="w-1/2"/>
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
          </>
        );
      case 2:
        return (
          <>
            <p className="my-5">Trạng thái: chưa thanh toán</p>
            <Link href={urlString}>
              <Button variant="outlined">
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
