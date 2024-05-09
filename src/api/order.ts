import axios from "axios";
import { IOrderStatus } from "../types/order";

export const getDetailOrder = async (orderId: number | null) => {
  if (!orderId) return;
  return await axios
    .request({ url: "http://localhost:8082/api/leaseOrder/" + orderId })
    .then((res) => res)
    .catch((error) => {
      console.log(error);
    });
};

export const getAllOrder = async (userId: number, isCustomer?: boolean) => {
  return await axios
    .request({
      url: `http://localhost:8082/api/leaseOrder/search/${
        isCustomer ? `lessor` : `lessee`
      }/${userId}`,
    })
    .then((response) => {
      const resultListOrder = response.data;
      if (resultListOrder) {
        return resultListOrder;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
export const updateStatusOrder = async (status: IOrderStatus, id: number) => {
  return await axios
    .request({
      url: `http://localhost:8082/api/leaseOrder/edit/status`,
      params: { id, status },
    })
    .then((response) => {})
    .catch((error) => {
      console.log(error);
    });
};
