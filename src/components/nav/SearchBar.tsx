import { InputBase, styled } from "@mui/material";
import { CiSearch } from "react-icons/ci";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(1, 2),
  height: "100%",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.main,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  borderLeft: "var(--Grid-borderWidth) solid",
  borderColor: "divider",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 1),
    transition: theme.transitions.create("width"),
    color: theme.palette.primary.main,
    width: "100%",
  },
}));

const SearchBar = () => {
  return (
    <>
      <StyledInputBase
        placeholder="Tìm sách…"
        inputProps={{ "aria-label": "search" }}
      />
      <SearchIconWrapper>
        <CiSearch size={25} />
      </SearchIconWrapper>
    </>
  );
};

export default SearchBar;
