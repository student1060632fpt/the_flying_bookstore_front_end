"use client";
import React, { FormEventHandler, useCallback, useState } from "react";
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
import { useStoreSearch } from "@/hooks/search";
import { ICategory } from "@/types/category";

const FilterComponent = () => {
  const listCategory = useGenreStore((state) => state.listGenre);
  const genreParam = useStoreSearch((state) => state.categoryParam);
  const { updateCategoryParam, clearStorage } = useStoreSearch();
  const router = useRouter();
  const onChooseCategory = (val: any) => {
    if (!listCategory || !val) return;
    if (!val?.target) return;
    const category: ICategory = listCategory.find(
      (item) => item.id == val?.target?.value
    );
    updateCategoryParam(category);
    router.push(`/search`);
  };
  const handleDeleteFilter = () => {
    clearStorage();
    router.push(`/search`);
  };

  const renderListCategory = useCallback(() => {
    if (!listCategory) return <></>;
    return (
      <FormGroup onChange={onChooseCategory}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={genreParam?.id}
          name="radio-genre-group"
        >
          {listCategory.map((category) => (
            <FormControlLabel
              key={category.id}
              control={<Radio />}
              label={category.nameVn}
              value={category.id}
            />
          ))}
        </RadioGroup>
      </FormGroup>
    );
  }, [genreParam]);
  return (
    <>
      <h3 className="text-3xl font-semibold mb-8 text-primary">Lọc theo</h3>
      <div className=" flex justify-center w-full  mb-5">
        <Button onClick={handleDeleteFilter} variant="outlined">
          Xóa bộ lọc
        </Button>
      </div>
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
      </div>
    </>
  );
};

export default FilterComponent;
