import axios from "axios";
import { IOrderStatus } from "../types/order";
import { useAuthStore } from "@/hooks/user";
import { IUser } from "../types/user";
import { port } from "../utils/env";
import { handleError } from "./handleError";

export const getDetailOrder = async (orderId: number | null) => {
  if (!orderId) return;
  return await axios
    .request({ url: `${port}/api/leaseOrder/` + orderId })
    .then((res) => res)
    .catch((error) => {
      handleError(error);
    });
};

export const getAllOrder = async (userId: number, isCustomer?: boolean) => {
  return await axios
    .request({
      url: `${port}/api/leaseOrder/search/${isCustomer ? `lessor` : `lessee`
        }/${userId}`,
    })
    .then((response) => {
      const resultListOrder = response.data;
      if (resultListOrder) {
        return resultListOrder;
      }
    })
    .catch((error) => {
      handleError(error)
    });
};

export const updateStatusOrder = async (status: IOrderStatus, id: number, token: string) => {
  return await axios
    .request({
      url: `${port}/api/leaseOrder/edit/status`,
      params: { id, status },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => { })
    .catch((error) => {
      handleError(error)
    });
};

export const getOrderWithStatusService = async (status: number, profile: IUser | null, isCustomer?: boolean)  => {
  try {
    const response = await axios.request({
      url: `${port}/api/leaseOrder/search/${isCustomer ? `lessor` : `lessee`
        }/status/${profile?.id}`,
      params: {
        status,
      },
    });
    return response.data;
  }
  catch (error) {
    handleError(error)
  };
};