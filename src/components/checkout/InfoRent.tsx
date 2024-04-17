"use client";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import "./Step.scss";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller, useFormContext } from "react-hook-form";
import { IFormCheckout } from "@/types/form";
import { FormInputText } from "./FormInputText";

const InfoRent = () => {
  const [cleared, setCleared] = useState<boolean>(false);
  const [age, setAge] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);
  return (
    <>
      <div className="row-2">
        <FormInputText
          name={"lastName"}
          label={"Họ và tên lót"}
        />
        <FormInputText
          name={"firstName"}
          label={"Tên"}
        />
      </div>
      <div className="grid grid-cols-1">
      <FormInputText
          name={"email"}
          label={"Email"}
        />
      </div>
      <div className="row-2">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Ngày sinh"
            slotProps={{
              field: { clearable: true, onClear: () => setCleared(true) },
            }}
          />
        </LocalizationProvider>
        <TextField
          size="medium"
          id="standard-basic"
          label="Số điện thoại"
          variant="standard"
        />
      </div>
      <div className="grid grid-cols-1">
        <TextField
          size="medium"
          id="standard-basic"
          label="Địa chỉ"
          variant="standard"
        />
      </div>
    </>
  );
};

export default InfoRent;
