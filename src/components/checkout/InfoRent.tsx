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
import { DatePicker, DateValidationError, LocalizationProvider, viVN } from "@mui/x-date-pickers";
import { useEffect, useMemo, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller, useFormContext } from "react-hook-form";
import { IFormCheckout } from "@/types/form";
import { FormInputText } from "./FormInputText";

const InfoRent = () => {
  const [cleared, setCleared] = useState<boolean>(false);
  const { control } = useFormContext();
  const [error, setError] = useState<DateValidationError | null>(null);

  const errorMessage = useMemo(() => {
    switch (error) {
      case 'invalidDate': {
        return 'Ngày không hợp lệ';
      }
      default: {
        return '';
      }
    }
  }, [error]);
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
        <FormInputText name={"lastName"} label={"Họ và tên lót"} required />
        <FormInputText name={"firstName"} label={"Tên"} required />
      </div>
      <div className="grid grid-cols-1">
        <FormInputText name={"email"} label={"Email"} required />
      </div>
      <div className="row-2">
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          localeText={
            viVN.components.MuiLocalizationProvider.defaultProps.localeText
          }
        >
          <Controller
            control={control}
            name="birthDate"
            rules={{ required: "Chọn ngày sinh" }}
            render={({ field, }) => {
              return (
                <DatePicker
                  sx={{ width: "100%", mb: 2 }}
                  label="Ngày sinh"
                  inputRef={field.ref}
                  format="DD/MM/YYYY"
                  disableFuture
                  onError={(newError) => setError(newError)}
                  slotProps={{
                    textField: {
                      helperText: errorMessage,
                    },
                    field: { clearable: true, onClear: () => setCleared(true) },
                  }}
                  {...field}
                />
              );
            }}
          />
        </LocalizationProvider>
        <FormInputText name={"phoneNumber"} label={"Số điện thoại"} required />
      </div>
      <div className="grid grid-cols-1">
        <FormInputText name={"address"} label={"Địa chỉ"} required />
      </div>
    </>
  );
};

export default InfoRent;
