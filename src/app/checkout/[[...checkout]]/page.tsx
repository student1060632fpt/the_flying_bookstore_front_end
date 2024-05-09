"use client";
import Step1 from "@/components/checkout/Step1";
import Step2 from "@/components/checkout/Step2";
import Step3 from "@/components/checkout/Step3";
import { useStoreCart } from "@/hooks/cart";
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
import AlertSignOut from "../../../components/nav/AlertSignOut";
import { IAlert } from "../../(auth)/sign-up/[[...sign-up]]/page";
import { useStoreStep } from "../../../hooks/step";

const steps = ["Điền thông tin", "Xuất đơn hàng", "Lấy hàng"];

const Checkout = () => {
  const [alert, setAlert] = useState<IAlert>({
    open: false,
    message: "Tạo đơn hàng thành công",
    severity: "success",
  });
  const { changeStep, step } = useStoreStep();
  const { removeCart } = useStoreCart();

  const handleNext = () => {
    changeStep(step + 1);
    removeCart();
  };

  const chooseStep = () => {
    switch (step) {
      case 0:
        return <Step1 handleNext={handleNext}/>;
      case 1:
        return <Step2 handleNext={handleNext} setAlert={setAlert} />;
      case 2:
        return <Step3 />;
      default:
        return <></>;
    }
  };

  return (
    <>
      <Stepper activeStep={step}>
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
      <AlertSignOut alert={alert} setAlert={setAlert} />
    </>
  );
};

export default Checkout;
