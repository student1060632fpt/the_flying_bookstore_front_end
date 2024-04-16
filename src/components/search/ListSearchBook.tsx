"use client";
import { Pagination } from "@mui/material";
import SearchedBook from "./SearchedBook";
import { PageResponse } from "@/types/page";
import { IListing } from "@/types/book";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
const ListSearchBook = ({
  bookData,genreParam,titleParam,pageSizeParam
}: {
  bookData: PageResponse<IListing> | undefined;
  genreParam: string;
  titleParam:string;
  pageSizeParam:string
}) => {
  const router = useRouter()
  const handleChangePage = (
    event: ChangeEvent<unknown> | null,
    newPage: number
  ) => {
    console.log({newPage});
    let linkTo = `/search/page-number/${newPage}`
    if(genreParam){

      linkTo = `/search/category/${genreParam}/page-number/${newPage}`
    } else if(titleParam){
      linkTo = `/search/book-name/${titleParam}/page-number/${newPage}`
    }
    router.push(linkTo)
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
          page={parseInt(pageSizeParam)}
        />
      </div>
    </>
  );
};

export default ListSearchBook;
