"use client";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Checkbox, FormControl, FormControlLabel, IconButton, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import React, { MouseEvent, useState } from "react";

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <>
      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        sx={{ width: "100%" }}
      />
      <FormControl variant="standard" sx={{ width: "100%" }}>
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
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
