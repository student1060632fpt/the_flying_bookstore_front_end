import axios, { AxiosResponse } from "axios";
import { IListing } from "@/types/book";
import { PageResponse } from "@/types/page";
import { port } from "../utils/env";


const getBookDetailService = async (detailId: string) => {
  try {
    const response: AxiosResponse<IListing> = await axios.request({
      url: `http://${port}/api/listing/detailListing/${detailId}`,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
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
    const response: AxiosResponse<PageResponse<IListing>> = await axios.request({
      url: `http://${port}/api/listing/search`,
      method: "GET",
      params:{
        allowRent: 1,
        allowPurchase: 1
      }
    });
    return response.data;
  } catch (error) {
    throw new Error("Get Book failed");
  }
}
export { getBookDetailService, getAllBookService, getManyBookService }
