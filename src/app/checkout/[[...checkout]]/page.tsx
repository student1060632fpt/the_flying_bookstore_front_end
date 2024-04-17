"use client";
import Step1 from "@/components/checkout/Step1";
import Step2 from "@/components/checkout/Step2";
import Step3 from "@/components/checkout/Step3";
import { useAuthStore } from "@/hooks/user";
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
import React, { useEffect, useState } from "react";

const steps = ["Điền thông tin", "Xuất đơn hàng", "Lấy hàng"];

const Checkout = ({ query }: { query: any }) => {
  const [activeStep, setActiveStep] = useState(0);
  const { isLogin } = useAuthStore();
  const router = useRouter();
  const searchParams:any = useSearchParams();

  console.log({ searchParams }, "tui đang viết ở page nè");
  const getStatusOrder = () => {
    if(searchParams?.vnp_ResponseCode != "00") return;
    const data = {
      vnp_Amount: searchParams?.vnp_Amount || "",
      vnp_BankCode: searchParams?.vnp_BankCode || "",
      vnp_BankTranNo: searchParams?.vnp_BankTranNo || "",
      vnp_CardType: searchParams?.vnp_CardType || "",
      vnp_OrderInfo: searchParams?.vnp_OrderInfo || "",
      vnp_PayDate: searchParams?.vnp_PayDate || "",
      vnp_ResponseCode: searchParams?.vnp_ResponseCode || "",
      vnp_TmnCode: searchParams?.vnp_TmnCode || "",
      vnp_TransactionNo: searchParams?.vnp_TransactionNo || "",
      vnp_TransactionStatus: searchParams?.vnp_TransactionStatus || "",
      vnp_TxnRef: searchParams?.vnp_TxnRef || "",
      vnp_SecureHash: searchParams?.vnp_SecureHash || "",
    };
    
  };
  useEffect(() => {
    getStatusOrder();
  }, []);

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
