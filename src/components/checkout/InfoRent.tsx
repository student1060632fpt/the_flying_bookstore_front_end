"use client";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import "./Step.scss";
import {
  DatePicker,
  DateValidationError,
  LocalizationProvider,
  viVN,
} from "@mui/x-date-pickers";
import { useEffect, useMemo, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller, useFormContext } from "react-hook-form";
import { IFormCheckout } from "@/types/form";
import { FormInputText } from "./FormInputText";

const InfoRent = () => {
  const [cleared, setCleared] = useState<boolean>(false);
  const { control } = useFormContext();

  useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => { };
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
      <div className="grid grid-cols-1 mt-5">
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          localeText={
            viVN.components.MuiLocalizationProvider.defaultProps.localeText
          }
        >
          <Controller
            control={control}
            name="birthDate"
            rules={{
              required: {
                value: true,
                message: "Chọn ngày sinh",
              },
            }}
            render={({
              field: { onChange, value, ref },
              formState: { errors },
            }) => {
              const errorMessage = errors?.birthDate?.message ? String(errors?.birthDate?.message) : "";
              return (
                <>
                  <DatePicker
                    sx={{ width: "100%", borderColor: "red" }}
                    label="Ngày sinh"
                    inputRef={ref}
                    format="DD/MM/YYYY"
                    disableFuture

                    slotProps={{
                      field: {
                        clearable: true,
                        onClear: () => setCleared(true),
                      },
                    }}
                    onChange={onChange}
                    onAccept={onChange}
                    value={value}
                  />
                  <FormHelperText required={errors?.birthDate?.type == "required"} style={{ color: "#d32f2f" }}>{errorMessage}</FormHelperText>
                </>
              );
            }}
          />
        </LocalizationProvider>
      </div>
      <div className="grid grid-cols-1">
        <FormInputText name={"phoneNumber"} label={"Số điện thoại"} required />
      </div>
      <div className="grid grid-cols-1 mt-5">
        <FormInputText name={"address"} label={"Địa chỉ"} required />
      </div>
    </>
  );
};

export default InfoRent;
