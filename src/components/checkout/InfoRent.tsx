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
    <div className="card ">
      <h3 className="">Thông tin đặt thuê</h3>
      <div className="row-2">
        <TextField
          size="medium"
          id="standard-basic"
          label="Họ và tên lót"
          variant="standard"
        />
        <TextField
          size="medium"
          id="standard-basic"
          label="Tên"
          variant="standard"
        />
      </div>
      <div className="row-2">
        <TextField
          size="medium"
          id="standard-basic"
          label="Email"
          variant="standard"
        />
        <TextField
          size="medium"
          id="standard-basic"
          label="Số điện thoại"
          variant="standard"
        />
      </div>
      <div className="row-2">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            sx={{ width: 260 }}
            slotProps={{
              field: { clearable: true, onClear: () => setCleared(true) },
            }}
          />
        </LocalizationProvider>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Thành phố"
            onChange={handleChange}
          >
            <MenuItem value={10}>Hồ Chí Minh</MenuItem>
            <MenuItem value={20}>Hà Nội</MenuItem>
            <MenuItem value={30}>Đà Nẵng</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="grid grid-cols-1">
        <TextField
          size="medium"
          id="standard-basic"
          label="Địa chỉ"
          variant="standard"
        />
      </div>
    </div>
  );
};

export default InfoRent;
