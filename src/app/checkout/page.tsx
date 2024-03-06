"use client";
import Step1 from "@/components/checkout/Step1";
import Step2 from "@/components/checkout/Step2";
import Step3 from "@/components/checkout/Step3";
import {
  Box,
  Button,
  Container,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const steps = ["Điền thông tin", "Xuất đơn hàng", "Lấy hàng"];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const stepFinish = () => {
    return (
      <React.Fragment>
        <Typography sx={{ mt: 2, mb: 1 }}>
          All steps completed - you&apos;re finished
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Box sx={{ flex: "1 1 auto" }} />
          <Button onClick={handleReset}>Reset</Button>
        </Box>
      </React.Fragment>
    );
  };

  const step2 = () => {
    return (
      <React.Fragment>
        <Typography sx={{ mt: 2, mb: 1 }}>Step 2 ❤</Typography>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Quay lại
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />

          <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Hoàn thành" : "Next"}
          </Button>
        </Box>
      </React.Fragment>
    );
  };
  const chooseStep = () => {
    switch (activeStep) {
      case 0:
        return <Step1 handleNext={handleNext} />;
      case 1:
        return <Step2 handleNext={handleNext}/> ;
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
          {activeStep === steps.length ? stepFinish() : chooseStep()}
        </>
    
  );
};

export default Checkout;
