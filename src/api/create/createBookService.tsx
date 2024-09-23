import axios from "axios";

import { port } from "../utils/env";

const onCreateBook = async (data: string) => {
  try {
    const response = await axios.request({
      method: "POST",
      maxBodyLength: Infinity,
      url: `http://${port}/api/book"`,
      headers: {
        "Content-Type": "application/json",
      },
      data,
    });
    return response.data;
  } catch(error) {
    console.log(error);
    return [];
  };
};
const getAllBooksService = async () => {
  try{
    const response = await axios.request({ url: `http://${port}/api/book` });
    return response.data;
  }
  catch (error) {
    console.log(error);
  };
}
export { onCreateBook, getAllBooksService }