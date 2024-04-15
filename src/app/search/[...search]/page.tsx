"use client";
import { IListing } from "@/components/home/PromoteSection";
import FilterComponent from "@/components/search/Filter";
import HeaderListBook from "@/components/search/HeaderListBook";
import ListSearchBook from "@/components/search/ListSearchBook";
import { PageResponse } from "@/types/page";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "http://localhost:8082/api/listing/search",
};
export default function Page({
  params,
}: {
  params: { search: Array<string> };
}) {
  const [listBook, setListBook] = useState<PageResponse<IListing>>()
  const genreParam = params?.search[0] == "category" ? params?.search[1] : "";
  async function makeRequest() {
    const title = "";
    const paramsAxios = {
      genre:genreParam,
      title,
    };
    try {
      const response: AxiosResponse<PageResponse<IListing>> = await axios.request({ ...config, params: paramsAxios });
      if (response?.data) {
        console.log(response?.data?.content);
        setListBook(response?.data)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    makeRequest();
  },[]);

  return (
    <div className="container mx-auto mt-10 mb-20 flex gap-7 flex-row">
      <div className="basis-1/5 ">
        <FilterComponent genreParam={genreParam}/>
      </div>
      <div className="flex-1">
        <HeaderListBook bookData={listBook}/>
        <ListSearchBook bookData={listBook}/>
      </div>
    </div>
  );
}
