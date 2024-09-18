import axios from "axios";
import { useAuthStore } from "@/hooks/user";
import { useStoreAlert } from "@/hooks/alert";

const port = process.env.NEXT_PUBLIC_API_URL || "localhost:8082";

const { token } = useAuthStore();
const { callErrorAlert } = useStoreAlert();
const onSubmitOrderService = async (convertValue: any) => {
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
const getDetailOrderService = async (orderId: number | null) => {
  try {
    const response = await axios.request({ 
      url: `http://${port}/api/leaseOrder/` + orderId 
    });
    return response.data;
  } catch(error) {
      console.log(error);
    };
};
export { onSubmitOrderService, getDetailOrderService }