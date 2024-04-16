"use client";
import { Pagination } from "@mui/material";
import SearchedBook from "./SearchedBook";
import { PageResponse } from "@/types/page";
import { IListing } from "@/types/book";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useStoreSearch } from "@/hooks/search";
const ListSearchBook = ({
  bookData
}: {
  bookData: PageResponse<IListing> | undefined;
}) => {
  const {categoryParam: genreParam,updatePageNumber, titleParam,pageNumber: pageSizeParam} = useStoreSearch()
  const router = useRouter()
  const handleChangePage = (
    event: ChangeEvent<unknown> | null,
    newPage: number
  ) => {
    updatePageNumber(newPage);
    router.push("/search")
  };
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {bookData?.content.map((item) => (
          <SearchedBook key={item.id} book={item} />
        ))}
      </div>
      <div className="flex justify-end mt-10">
        <Pagination
          count={bookData?.totalPages}
          onChange={handleChangePage}
          page={pageSizeParam}
        />
      </div>
    </>
  );
};

export default ListSearchBook;
