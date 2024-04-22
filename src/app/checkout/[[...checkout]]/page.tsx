"use client";
import Step1 from "@/components/checkout/Step1";
import Step2 from "@/components/checkout/Step2";
import Step3 from "@/components/checkout/Step3";
import { useAuthStore } from "@/hooks/user";
import { IParamsVNpay } from "@/types/checkout";
import {
  Box,
  Button,
  Container,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useUrl } from "nextjs-current-url";
import React, { useEffect, useState } from "react";

const steps = ["Điền thông tin", "Xuất đơn hàng", "Lấy hàng"];
const parseUrlParams = (url: string) => {
  const params: IParamsVNpay = {
    vnp_Amount: "",
    vnp_BankCode: "",
    vnp_BankTranNo: "",
    vnp_CardType: "",
    vnp_OrderInfo: "",
    vnp_PayDate: "",
    vnp_ResponseCode: "",
    vnp_TmnCode: "",
    vnp_TransactionNo: "",
    vnp_TransactionStatus: "",
    vnp_TxnRef: "",
    vnp_SecureHash: "",
  };
  //bước này bỏ cái pathname
  const queryString = url.split("?")[1];
  if (queryString) {
    const keyValuePairs = queryString.split("&");
    for (const pair of keyValuePairs) {
      const [key, value] = pair.split("=");
      params[key as keyof IParamsVNpay] = decodeURIComponent(value) as string;
    }
  }
  return params;
};
const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { isLogin } = useAuthStore();
  const { href: currentUrl } = useUrl() ?? {};

  const getStatusOrder = () => {
    console.log({ currentUrl });
    if (!currentUrl) return;
    const params = parseUrlParams(currentUrl);
    if (params.vnp_TransactionStatus == "00") {
      // gọi api tạo đơn hàng ở đây
      setActiveStep(1);  
    }
  };
  useEffect(() => {
    getStatusOrder();
  }, [currentUrl]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const chooseStep = () => {
    switch (activeStep) {
      case 0:
        return <Step1 handleNext={handleNext} />;
      case 1:
        return <Step2 handleNext={handleNext} />;
      case 2:
        return <Step3 />;
      default:
        return <></>;
    }
  };

  return (
    <>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {chooseStep()}
    </>
  );
};

export default Checkout;
