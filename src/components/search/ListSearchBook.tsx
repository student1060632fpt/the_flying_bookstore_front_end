import { Pagination } from "@mui/material";
import SearchedBook from "./SearchedBook";
const ListSearchBook = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <SearchedBook />
        <SearchedBook />
        <SearchedBook />
        <SearchedBook />
        <SearchedBook />
        <SearchedBook />
        <SearchedBook />
        <SearchedBook />
      </div>
      <div className="flex justify-end mt-10">
        <Pagination count={10} />
      </div>
    </>
  );
};

export default ListSearchBook;
