"use client";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";
import { PageResponse } from "@/types/page";
import { IListing } from "../home/PromoteSection";
import { useGenreStore } from "@/hooks/genre";
const filterOption = ["Mới nhất", "Bán chạy", "Giá tăng dần", "Giá giảm dần"];
const HeaderListBook = ({
  bookData,
  genreParam,
  titleParam
}: {
  bookData: PageResponse<IListing> | undefined;
  genreParam: string;
  titleParam:string;
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const listCategory = useGenreStore(state=>state.listGenre)
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
  const renterTitle = ()=>{
    if(!genreParam && !titleParam){
      return <h2 className="text-4xl font-semibold text-primary">Tất cả loại sách</h2>
    } else if(genreParam && listCategory){
      const genre = listCategory?.find(item => item.name == genreParam);
      return <h2 className="text-4xl font-semibold text-primary">Sách theo thể loại {genre?.nameVn}</h2>
    } else if (titleParam){
      return <h2 className="text-4xl font-semibold text-primary">Sách có tiêu đề bao gồm {titleParam}</h2>
    }
  }
  return (
    <div>
      {renterTitle()}
      <div className="border rounded-lg my-5 px-3 py-1 bg-white flex justify-between items-center">
        <p className="font-semibold my-2">
          Hiển thị {bookData?.totalElements || 0} cuốn sách hiện có
        </p>
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
