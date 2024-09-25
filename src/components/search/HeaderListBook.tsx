"use client";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";
import { PageResponse } from "@/types/page";
import { useGenreStore } from "@/hooks/genre";
import { IListing } from "@/types/book";
import { useStoreSearch } from "@/hooks/search";
interface FilterOption {
  allowRent: number;
  allowPurchase: number;
}
const filterOption: { [key: string]: FilterOption } = {
  "Sách mua và thuê": {
    allowRent: 1,
    allowPurchase: 1
  }, "Chỉ sách thuê": {
    allowRent: 1,
    allowPurchase: 0
  }, "Chỉ sách mua": {
    allowRent: 0,
    allowPurchase: 1
  }
}
const listfilterOption = ["Sách mua và thuê", "Chỉ sách thuê", "Chỉ sách mua"];
const HeaderListBook = ({
  bookData,
}: {
  bookData: PageResponse<IListing> | undefined;
}) => {
  const { categoryParam: genreParam, titleParam } = useStoreSearch();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const listCategory = useGenreStore((state) => state.listGenre);
  const open = Boolean(anchorEl);
  const {updateBookType} = useStoreSearch(state=>state);
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
    let allowRent: 1 | 0 = 1, allowPurchase: 1 | 0 = 1;
    switch (index) {
      case 0:
        allowRent = 1;
        allowPurchase = 1;
        break;
      case 1:
        allowRent = 1;
        allowPurchase = 0;
        break;
      case 2:
        allowRent = 0;
        allowPurchase = 1;
        break;
      default:
        allowRent = 1;
        allowPurchase = 1;
        break;
    }
    updateBookType(allowRent,allowPurchase);
  };
  const renterTitle = () => {
    let returnTitle = `Tất cả sách`;
    let returnCategory = "";
    if (!genreParam && !titleParam) {
      return <h2 className="text-4xl font-semibold text-primary">{returnTitle}</h2>
    } else {
      if (genreParam && listCategory) {
        returnTitle = `Sách theo thể loại ${genreParam?.nameVn}`;
      }
      if (titleParam) {
        returnCategory = `Sách có tiêu đề bao gồm: ${titleParam}`;
      }
    }

    return (
      <>
        <h2 className="text-4xl font-semibold text-primary">{returnTitle}</h2>
        {returnCategory ?? (
          <h2 className="text-4xl font-semibold text-primary">
            {returnCategory}
          </h2>
        )}
      </>
    );
  };
  const listFilterOption = Object.keys(filterOption).filter(key => {
    const option = filterOption[key];
    return option.allowRent || option.allowPurchase;
  });
  return (
    <div>
      {renterTitle()}
      <div className="border rounded-lg my-5 px-3 py-1 bg-white flex justify-between items-center">
        <p className="font-semibold my-2">
          Hiển thị {bookData?.totalElements || 0} cuốn sách hiện có
        </p>
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
          {listfilterOption[selectedIndex]}
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
        {listfilterOption.map((option, index) => (
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
