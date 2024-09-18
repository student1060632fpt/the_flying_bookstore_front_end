import axios, { AxiosResponse } from "axios";
import { IListing } from "@/types/book";
import { PageResponse } from "@/types/page";

const port = process.env.NEXT_PUBLIC_API_URL || "localhost:8082";

const getBookDetailService = async (params: string) => {
  const detailId = params ? params : null;
  try {
    const response: AxiosResponse<IListing> = await axios.request({
      url: `http://${port}/api/listing/detailListing/${detailId}`,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
const getManyBookService = async (paramsAxios: any) => { 
  try {
    const response: AxiosResponse<PageResponse<IListing>> =
      await axios.request({
        maxBodyLength: Infinity,
        url: `http://${port}/api/listing/search`,
        params: paramsAxios,
      });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
const getAllBookService = async () => {
  try {
    const response:  AxiosResponse<PageResponse<IListing>>  = await axios.request( {
      url:`http://${port}/api/listing/search`,
      method: "GET",
    });
    return response.data;
  } catch (error) {
    throw new Error("Get Book failed");
  }
}
export { getBookDetailService, getAllBookService , getManyBookService }