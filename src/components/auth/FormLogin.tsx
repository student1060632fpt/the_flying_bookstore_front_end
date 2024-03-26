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

const FormLogin = ({
  formData,
  setFormData,
}: {
  formData: any;
  setFormData: any;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <>
      <TextField
        onChange={(e: any) =>
          setFormData((state: any) => ({ ...state, loginName: e.target.value }))
        }
        id="standard-basic"
        label="Tên đăng nhập"
        variant="standard"
        value={formData.loginName}
        sx={{ width: "100%" }}
      />
      <FormControl
        variant="standard"
        sx={{ width: "100%" }}
        onChange={(e: any) =>
          setFormData((state: any) => ({ ...state, password: e.target.value }))
        }
      >
        <InputLabel htmlFor="standard-adornment-password">Mật khẩu</InputLabel>
        <Input
          value={formData.password}
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
      </FormControl>
      <FormControl>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Nhớ mật khẩu"
        />
      </FormControl>
    </>
  );
};

export default FormLogin;
