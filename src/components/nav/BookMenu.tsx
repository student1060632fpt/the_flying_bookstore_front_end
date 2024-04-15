import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { BsShop } from "react-icons/bs";
import Link from "next/link";
import { CiBoxList } from "react-icons/ci";
import { useGenreStore } from "@/hooks/genre";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function BookMenus() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const listCategory = useGenreStore((state) => state.listGenre);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const renderMenu = () => {
    if (!listCategory) return <></>;
    return (
      <StyledMenu
        id="book-menu"
        MenuListProps={{
          "aria-labelledby": "book-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {listCategory.map((category) => (
          <Link
            key={category.id}
            href={`/search/${category.name}`}
            scroll={false}
          >
            <MenuItem onClick={handleClose} disableRipple>
              {category.nameVn}
            </MenuItem>
          </Link>
        ))}
      </StyledMenu>
    );
  };
  return (
    <>
      <Button
        id="book-button"
        aria-controls={open ? "book-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="text"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{ paddingLeft: { md: 3, xs: 1.5 } }}
      >
        <CiBoxList size={30} />
      </Button>
      {renderMenu()}
    </>
  );
}
