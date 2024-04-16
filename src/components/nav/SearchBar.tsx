import { Box, Divider, InputBase, styled } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import BookMenus from "./BookMenu";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useStoreSearch } from "@/hooks/search";
import { useEffect } from "react";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(1, 2),
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.main,
  cursor: "pointer",
  zIndex: 2,
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
interface IFromValue {
  search: string;
}
const SearchBar = () => {
  const { register, handleSubmit, reset } = useForm<IFromValue>();
  const router = useRouter();
  const { updateTitleParam, titleParam } = useStoreSearch();
  const onSubmit = (data: IFromValue) => {
    // Xử lý dữ liệu khi form được submit
    updateTitleParam(data.search);
    router.push(`/search`);
  };
  useEffect(() => {
    if (titleParam == null) {
      reset();
    }
  }, [titleParam]);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex grow border bg-[#F8F8F8] rounded"
      >
        <BookMenus />
        <Divider orientation="vertical" variant="middle" flexItem />

        <StyledInputBase
          placeholder="Tìm sách…"
          inputProps={{ "aria-label": "search" }}
          {...register("search")}
        />
        <SearchIconWrapper onClick={handleSubmit(onSubmit)}>
          <CiSearch size={25} />
        </SearchIconWrapper>
      </form>
    </>
  );
};

export default SearchBar;
