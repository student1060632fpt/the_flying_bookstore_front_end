"use client";
import FilterComponent from "@/components/search/Filter";
import HeaderListBook from "@/components/search/HeaderListBook";
import ListSearchBook from "@/components/search/ListSearchBook";
import { useStoreSearch } from "@/hooks/search";

import { IListing } from "@/types/book";
import { PageResponse } from "@/types/page";

import { useEffect, useState } from "react";
import { getManyBookService } from "@/api/bookListService";
import { useStoreAlert } from "../../hooks/alert";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  const [listBook, setListBook] = useState<PageResponse<IListing>>();
  const { categoryParam, pageNumber, titleParam, allowRent, allowPurchase } = useStoreSearch();
  const {callErrorAlert} = useStoreAlert()
  useEffect(() => {
    const makeRequest = async () => {
      const paramsAxios = {
        size: 20,
        page: pageNumber - 1,
        title: titleParam,
        genre: categoryParam?.nameVn,
        allowRent,
        allowPurchase
      };
      console.log({ paramsAxios });
      const response = await getManyBookService(paramsAxios);
      if (typeof response != "string") {
        setListBook(response);
      } else {
        callErrorAlert(response)
      }
    }
    makeRequest();
  }, [allowPurchase, allowRent, callErrorAlert, categoryParam, pageNumber, titleParam]);

  return (
    <div className="container mx-auto mt-10 mb-20 flex gap-7 flex-row">
      <div className="basis-1/5 ">
        <FilterComponent />
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
