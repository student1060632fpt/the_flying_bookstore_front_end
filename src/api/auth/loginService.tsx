import axios from "axios";
import { IUserLogin } from "@/types/user";
import { port } from "../utils/env";

const getProfileService = async (token: string) => {
  try {
    const response = await axios.request({
      url: `http://${port}/api/user/myInfo`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const handleFormSubmitService = async (formData: IUserLogin) => {
  try {
    const response = await axios.request({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: formData,
      url: `http://${port}/api/user/login`,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export { getProfileService, handleFormSubmitService }