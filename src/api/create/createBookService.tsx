import axios, { AxiosResponse } from "axios";
import { port } from "../../utils/env";
import { IBook } from "../../types/book";
import { IFrontEndError, isFrontEndError, isServerError, IValidationError } from "../../types/error";


const onCreateBook = async (data: string): Promise<AxiosResponse<IBook> | string> => {
  try {
    const response = await axios.request({
      method: "POST",
      maxBodyLength: Infinity,
      url: `http://${port}/api/book`,
      headers: {
        "Content-Type": "application/json",
      },
      data,
    });
    return response;
  } catch (error: unknown) {
   if (axios.isAxiosError<IFrontEndError, Record<string, unknown>>(error)) {
      if (error.response) {
        console.error("Axios error response:", {error});
        return "Lỗi từ server: " + error.response.status + " - " + error.response.data.title;
      } else if (error.request) {
        console.error("Axios error request:", error.request);
        return "Không có phản hồi từ server, vui lòng kiểm tra kết nối mạng";
      } else {
        console.error("Axios general error:", error.message);
        return "Lỗi axios: " + error.message;
      }
    } else if (error instanceof Error) {
      // Trường hợp các lỗi khác (ví dụ: lỗi runtime, cú pháp, etc.)
      console.error("General error:", error.message);
      return "Lỗi không xác định: " + error.message;
    } else {
      // Fallback cho trường hợp lỗi không rõ kiểu
      console.error("Unknown error type:", error);
      return "Lỗi không xác định";
    }
  }
};
const getAllBooksService = async () => {
  try {
    const response = await axios.request({ url: `http://${port}/api/book` });
    return response.data;
  }
  catch (error) {
    console.log(error);
  };
}
export { onCreateBook, getAllBooksService }