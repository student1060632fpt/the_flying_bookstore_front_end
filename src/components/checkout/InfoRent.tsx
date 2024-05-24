"use client";
import {
  Alert,
  Box,
  Button,
  FormHelperText,
} from "@mui/material";
import "./Step.scss";
import {
  DatePicker,
  LocalizationProvider,
  viVN,
} from "@mui/x-date-pickers";
import { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller, useFormContext } from "react-hook-form";
import { FormInputText } from "./FormInputText";

const InfoRent = ({isProfile}:{isProfile?: boolean}) => {
  const [cleared, setCleared] = useState<boolean>(false);
  const {
    control,
    formState: { isValid, isSubmitSuccessful },
  } = useFormContext();

  useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);
  const renderInfo = () => {
    if(isProfile) return <></>
    if (isSubmitSuccessful)
      return <Alert severity="success">Chọn thanh toán rồi tạo đơn hàng</Alert>;
    if (!isValid) {
      return (
        <Alert severity="warning">Điền thông tin đặt thuê còn thiếu</Alert>
      );
    }
    return <div></div>;
  };
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
              return (
                <>
                  <DatePicker
                    sx={{ width: "100%", borderColor: "red" }}
                    label="Ngày sinh *"
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
                  <FormHelperText
                    required={errors?.birthDate?.type == "required"}
                    style={{ color: "#d32f2f" }}
                  >
                    {String(errors?.birthDate?.message)}
                  </FormHelperText>
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
      <Box
        justifyContent={"space-between"}
        mt={2}
        alignItems={"center"}
        display={"flex"}
      >
        {renderInfo()}

        <Button size="large" type="submit" variant="outlined">
          Xác nhận
        </Button>
      </Box>
    </>
  );
};

export default InfoRent;
