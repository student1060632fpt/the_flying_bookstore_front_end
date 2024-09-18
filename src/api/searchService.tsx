import axios from "axios";
import { AxiosResponse } from "axios";
import { IListing } from "@/types/book";
import { PageResponse } from "@/types/page";

const port = process.env.NEXT_PUBLIC_API_URL || "localhost:8082";

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
export { getManyBookService }