"use client";
import Step1 from "@/components/checkout/Step1";
import { SITE_NAME } from "@/utils/env";
import {
  Box,
  Button,
  Container,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import type { Metadata } from "next";
import React, { useState } from "react";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];
export const metadata: Metadata = {
  title: "Checkout | " + SITE_NAME,
};
const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);


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
  const step1 = () => {
    return (
      <React.Fragment>
        <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}++</Typography>
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
        return <Step1 handleNext={handleNext}/>;
      case 1:
        return step2();
      case 2:
      default:
        return <></>;
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ width: "100%", mt: 5 }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
           
            return (
              <Step key={label} {...stepProps}>
                <StepLabel >{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? stepFinish() : chooseStep()}
      </Box>
    </Container>
  );
};

export default Checkout;
