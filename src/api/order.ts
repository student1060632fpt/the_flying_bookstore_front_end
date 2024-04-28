import axios from "axios";

export const getDetailOrder = async (orderId: number | null) => {
  if (!orderId) return;
  return await axios
    .request({ url: "http://localhost:8082/api/leaseOrder/" + orderId })
    .then((res) => res)
    .catch((error) => {
      console.log(error);
    });
};
