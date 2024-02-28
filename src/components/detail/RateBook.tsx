"use client";
import { Chip } from "@mui/material";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import styled from "styled-components";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "black",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}));

const RateBook = () => {
  const [rate, setRate] = useState(0);
  const handleClick = (currentRate: number) => {
    setRate(currentRate);
  };
  const rateList = [5, 4, 3, 2, 1];
  return (
    <>
      <div className="border flex p-4 gap-5 justify-between ">
        <div className="ml-3">
          <div className="flex  items-center justify-center gap-2 py-3">
            <h1 className="text-4xl font-bold text-primary">4.5</h1>
            <FaStar className="text-secondary text-2xl" />
          </div>
          <p>5 bài đánh giá</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <Chip
            label="Xem tất cả"
            color="primary"
            variant={rate == 0 ? "filled" : "outlined"}
            onClick={() => handleClick(0)}
          />
          {rateList.map((item) => (
            <Chip
              key={item}
              label={`${item} sao`}
              color="primary"
              sx={{ px: 1 }}
              variant={rate == item ? "filled" : "outlined"}
              onClick={() => handleClick(item)}
            />
          ))}
        </div>
        <div>
          <div className="flex flex-row items-center">
            <p className="pr-1">5</p>
            <FaStar className="text-secondary text-sm" />
            <BorderLinearProgress variant="determinate" value={50} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RateBook;
