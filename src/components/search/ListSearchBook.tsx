import { Pagination } from "@mui/material";
import SearchedBook from "./SearchedBook";
import { PageResponse } from "@/types/page";
import { IListing } from "../home/PromoteSection";
const ListSearchBook = ({
  bookData,
}: {
  bookData: PageResponse<IListing> | undefined;
}) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {bookData?.content.map((item) => (
          <SearchedBook key={item.id} book={item}/>
        ))}
      </div>
      <div className="flex justify-end mt-10">
        <Pagination count={bookData?.totalPages} />
      </div>
    </>
  );
};

export default ListSearchBook;
