import axios from "axios";
import { useAuthStore } from "../hooks/user";
import { IUser } from "../types/user";
import { IFormCheckout } from "../types/form";
import dayjs from "dayjs";

const port = process.env.NEXT_PUBLIC_API_URL || "localhost:8082";
export const getProfile = async (
  token: string | null,
  setToken: (arg: string, profile: IUser) => void
): Promise<void> => {
  try {
    const response = await axios.request({
      url: `http://${port}/api/user/myInfo`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response?.data && token) {
      setToken(token, response?.data);
    }
  } catch (error) {
    console.log(error);
  }
};
export const onSubmitProfile = async (data: IFormCheckout, profile: IUser | null,token: string | null) => {
  const { email, phoneNumber, firstName, lastName, birthDate, address } =
    data;
  let dataRes = JSON.stringify({
    id: profile?.id,
    username: profile?.username,
    email,
    phoneNumber,
    firstName,
    lastName,
    birthDate: dayjs(birthDate).format("YYYY-MM-DD"),
    address,
    password: null,
  });
  let config = {
    method: "put",
    maxBodyLength: Infinity,
    url: `http://${port}/api/user/${profile?.id}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: dataRes,
  };

  return await axios
    .request(config)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error);
    });
};