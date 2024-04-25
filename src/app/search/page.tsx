"use client";
import FilterComponent from "@/components/search/Filter";
import HeaderListBook from "@/components/search/HeaderListBook";
import ListSearchBook from "@/components/search/ListSearchBook";
import { useStoreSearch } from "@/hooks/search";
import { IListing } from "@/types/book";
import { PageResponse } from "@/types/page";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "http://localhost:8082/api/listing/search",
};
export default function Page() {
  const [listBook, setListBook] = useState<PageResponse<IListing>>();
  const { categoryParam, pageNumber, titleParam } = useStoreSearch();
  async function makeRequest() {
    const paramsAxios = {
      size: 20,
      page: pageNumber-1,
      title: titleParam,
      genre: categoryParam?.nameVn,
    };
    console.log({ paramsAxios });

    try {
      const response: AxiosResponse<PageResponse<IListing>> =
        await axios.request({ ...config, params: paramsAxios });
      if (response?.data) {
        setListBook(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    makeRequest();
  }, [categoryParam, pageNumber, titleParam]);

  return (
    <div className="container mx-auto mt-10 mb-20 flex gap-7 flex-row">
      <div className="basis-1/5 ">
        <FilterComponent  />
      </div>
      <div className="flex-1">
        <HeaderListBook
          bookData={listBook}
        />
        <ListSearchBook
          bookData={listBook}
        />
      </div>
    </div>
  );
}
