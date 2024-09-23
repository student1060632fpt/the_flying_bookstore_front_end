import axios from "axios";
import { port } from "../utils/env";

const onSubmitOrderService = async (convertValue: any, callErrorAlert: (message: string) => void, token: string | null) => {
  try {
    const response = await axios.request({
      method: "post",
      maxBodyLength: Infinity,
      url: `http://${port}/api/leaseOrder`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: JSON.stringify(convertValue),
    });
    return response.data;

  } catch (error) {
    callErrorAlert("Lỗi");
  }
}

const getDetailOrderService = async (orderId: number | null, token: string | null) => {
  try {
    const response = await axios.request({
      url: `http://${port}/api/leaseOrder/` + orderId,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  };
};

export { onSubmitOrderService, getDetailOrderService }