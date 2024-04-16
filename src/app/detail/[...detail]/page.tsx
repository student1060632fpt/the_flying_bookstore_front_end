"use client";
import BookInfo from "@/components/detail/BookInfo";
import DocumentInfo from "@/components/detail/DocumentInfo";
import RentBook from "@/components/detail/RentBook";
import NewComingList from "@/components/home/NewComing/NewComingList";
import PromoteSection from "@/components/home/PromoteSection";
import { IListing } from "@/types/book";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
interface IParams {
  params: { detail: Array<string> };
}

export default function Page({ params }: IParams) {
const [listing, setListing] = useState<IListing>()

  async function makeRequest() {
    const detailId = params?.detail[0] ? params?.detail[0] : null;
    try {
      const response: AxiosResponse<IListing> = await axios.request({
        url: `http://localhost:8082/api/listing/detailListing/${detailId}`,
      });
      setListing(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    makeRequest();
  }, []);

  return (
    <div className="container mx-auto mt-10 mb-20">
      <BookInfo book={listing}/>
      <div className="flex mt-5 gap-5">
        <div className="basis-9/12">
          <DocumentInfo book={listing}/>
        </div>
        <div className="flex-1">
          <RentBook />
        </div>
      </div>
      <PromoteSection/>
    </div>
  );
}
