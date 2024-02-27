"use client";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import { Button, FormControlLabel, FormGroup, Slider } from "@mui/material";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
function valuetext(value: number) {
  return `${value} đ`;
}
const FilterComponent = () => {
  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
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
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Văn học"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Lịch sử"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Kinh tế"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Thiếu nhi"
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion
          defaultExpanded
          sx={{ backgroundColor: "white", borderRadius: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <h3 className="text-lg font-semibold">Giá thuê</h3>
          </AccordionSummary>
          <AccordionDetails sx={{ mt: 3 }}>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="on"
              getAriaValueText={valuetext}
              valueLabelFormat={(value: number) => `${value}.000 đ`}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion
          defaultExpanded
          sx={{ backgroundColor: "white", borderRadius: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h3 className="text-lg font-semibold">Nhà xuất bản</h3>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Nhã Nam"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Thái Hà"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Phụ nữ"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Skybooks"
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion
          defaultExpanded
          sx={{ backgroundColor: "white", borderRadius: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h3 className="text-lg font-semibold">Quốc gia</h3>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Việt Nam"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Vương quốc Anh"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Mỹ"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Nhật"
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <div className=" flex justify-center w-full">
          <Button variant="outlined">Xóa bộ lọc</Button>
        </div>
      </div>
    </>
  );
};

export default FilterComponent;
