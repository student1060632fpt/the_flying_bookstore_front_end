"use client";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { MouseEvent, useState } from "react";
import FormHelperText from "@mui/material/FormHelperText";
import Link from "next/link";

const FormSignUp = ({

  register,
  errors,
}: {
  errors: any;
  register: any;

}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <>
      <TextField
        {...register("username", { require: "Username là trường bắt buộc" })}
        error={errors.username}
        id="standard-basic"
        label="Tên đăng nhập"
        variant="standard"
        sx={{ width: "100%" }}
        helperText={errors.username && errors.username.message}
        margin="dense"
      />
      <FormControl
        variant="standard"
        sx={{ width: "100%" }}
        margin="normal"
      >
        <InputLabel htmlFor="standard-adornment-password">Mật khẩu</InputLabel>
        <Input
          {...register("password", { require: "Mật khẩu là trường bắt buộc" })}
          error={errors.password}
          id="standard-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        {errors.password && (
          <FormHelperText>{errors.password.message}</FormHelperText>
        )}
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl
        variant="standard"
        sx={{ width: "100%" }}
        required
        margin="normal"
      >
        <InputLabel htmlFor="standard-adornment-password">
          Nhập lại mật khẩu
        </InputLabel>
        <Input
          {...register("repeatPassword", {
            require: "Yêu cầu điền trường này",
          })}
          id="standard-adornment-password"
          type={showRepeatPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowRepeatPassword((state) => !state)}
                onMouseDown={handleMouseDownPassword}
              >
                {showRepeatPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <div>Đọc <Link href={`/private-policy`}><span className="text-primary font-semibold">Điều khoản bảo mật</span></Link> </div>
      <FormControl>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Tôi đồng ý với Điều khoản bảo mật"
        />
      </FormControl>
    </>
  );
};

export default FormSignUp;
