import axios from "axios";
import { useAuthStore } from "@/hooks/user";
import { useRouter } from "next/navigation";
import { IUser } from "@/types/user";

const port = process.env.NEXT_PUBLIC_API_URL || "localhost:8082";

const onSubmitService = async (data: IUser) => {
  try {
    const response = await axios.request({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: `http://${port}/api/user/register`,
      data: {
        username: data.username,
        password: data.password,
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        birthDate: "",
      },
    });
    return response.data;
  } catch (error) {
    // Handle any network or server errors
    console.log({ error });
  }
};
export { onSubmitService }