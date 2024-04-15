"use client";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";
import { PageResponse } from "@/types/page";
import { IListing } from "../home/PromoteSection";
const filterOption = ["Mới nhất", "Bán chạy", "Giá tăng dần", "Giá giảm dần"];
const HeaderListBook = ({
  bookData,
}: {
  bookData: PageResponse<IListing> | undefined;
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };
  return (
    <div>
      <h2 className="text-4xl font-semibold text-primary">Sách</h2>
      <div className="border rounded-lg my-5 px-3 py-1 bg-white flex justify-between items-center">
        <p className="font-semibold">Hiển thị 37 cuốn sách hiện có</p>
        <Button
          id="basic-filter"
          aria-controls={open ? "basic-filter-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          startIcon={<FilterListIcon />}
          sx={{
            textTransform: "none",
          }}
        >
          {filterOption[selectedIndex]}
        </Button>
      </div>
      <Menu
        id="basic-filter-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {filterOption.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default HeaderListBook;
