"use client";
import { Chip, Rating } from "@mui/material";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import RateComment from "./RateComment";
import { IPropsBook } from "./DocumentInfo";
import { countAvarageReview } from "@/utils/helps";

const RateBook = ({ book }: IPropsBook) => {
  const [rate, setRate] = useState(0);
  const handleClick = (currentRate: number) => {
    setRate(currentRate);
  };
  const rateList = [5, 4, 3, 2, 1];
  const renderBookReview = () => {
    if(!book?.review)return <></>
    const newListReview =
      rate == 0
        ? book?.review
        : book?.review.filter((item) => item.score == rate);
    return newListReview.map((review) => (
      <RateComment key={review.id} review={review} />
    ))
  };
  return (
    <>
      <div className="border rounded-lg flex p-4 gap-5 ">
        <div className="ml-3 pr-6 border-r">
          <div className="flex  items-center justify-center gap-2 py-3">
            <h1 className="text-4xl font-bold text-primary">
              {countAvarageReview(book?.review)}
            </h1>
            <FaStar className="text-secondary text-2xl" />
          </div>
          <Rating
            name="half-rating-read"
            defaultValue={0}
            value={countAvarageReview(book?.review)}
            readOnly
            emptyIcon={<FaStar className="" fontSize="inherit" />}
            icon={<FaStar className="" fontSize="inherit" />}
          />
        </div>
        <div className="ml-3">
          <p className="ml-2 my-3">{book?.review?.length} bài đánh giá</p>
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
        </div>
      </div>
      <div className="flex flex-col mt-5 gap-5">
        {renderBookReview()}
      </div>
    </>
  );
};

export default RateBook;
