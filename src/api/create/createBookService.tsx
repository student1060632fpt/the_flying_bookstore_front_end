import axios from "axios";

const port = process.env.NEXT_PUBLIC_API_URL || "localhost:8082";

const onSubmitService = async (data: string) => {
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
export { onSubmitService, getAllBooksService }