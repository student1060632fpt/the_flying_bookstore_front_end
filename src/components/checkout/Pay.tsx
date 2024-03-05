"use client";
import { PiCreditCardLight } from "react-icons/pi";
import { PiHandshakeLight } from "react-icons/pi";
import "./Step.scss";
import MomoLogo from "./../../assets/images/MoMo_Logo.png";
import Image from "next/image";
import { useState } from "react";

const Pay = () => {
  const [payType, setPayType] = useState(0);
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
          <p className="">Thanh toán Napas</p>
        </div>
        <div
          className={`pay-card ${payType == 2 && "choose"}`}
          onClick={() => setPayType(2)}
        >
          <Image src={MomoLogo} alt="momo" className="icon" />
          <p className="">Thanh toán Momo</p>
        </div>
      </div>
    </div>
  );
};

export default Pay;
