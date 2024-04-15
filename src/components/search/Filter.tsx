"use client";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import {
  Button,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import { useGenreStore } from "@/hooks/genre";
import { useRouter } from "next/navigation";
import Link from "next/link";

const FilterComponent = ({ genreParam }: { genreParam: string }) => {
  const listCategory = useGenreStore((state) => state.listGenre);
  const router = useRouter();
  const onChooseCategory = (val: any) => {
    console.log({ val: val.target?.value });
    router.push(`/search/category/${val.target?.value}`);
  };
  const renderListCategory = () => {
    if (!listCategory) return <></>;
    return (
      <FormGroup onChange={onChooseCategory}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={genreParam}
          name="radio-genre-group"
        >
          {listCategory.map((category) => (
            <FormControlLabel
              key={category.id}
              control={<Radio />}
              label={category.nameVn}
              value={category.name}
            />
          ))}
        </RadioGroup>
      </FormGroup>
    );
  };
  return (
    <>
      <h3 className="text-3xl font-semibold mb-8 text-primary">Lọc theo</h3>
      <div className="card  rounded-md">
        <Accordion
          defaultExpanded
          sx={{ backgroundColor: "white", borderRadius: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h3 className="text-lg font-semibold">Danh mục</h3>
          </AccordionSummary>
          <AccordionDetails>{renderListCategory()}</AccordionDetails>
        </Accordion>

        <div className=" flex justify-center w-full">
          <Link href={`/search/get-all`}>
            <Button variant="outlined">Xóa bộ lọc</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FilterComponent;
