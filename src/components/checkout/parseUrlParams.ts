import { IParamsVNpay } from "../../types/checkout";

export const parseUrlParams = (url: string):IParamsVNpay => {
  const params: IParamsVNpay = {
    vnp_Amount: "",
    vnp_BankCode: "",
    vnp_BankTranNo: "",
    vnp_CardType: "",
    vnp_OrderInfo: "",
    vnp_PayDate: "",
    vnp_ResponseCode: "",
    vnp_TmnCode: "",
    vnp_TransactionNo: "",
    vnp_TransactionStatus: "",
    vnp_TxnRef: "",
    vnp_SecureHash: "",
  };
  //bước này bỏ cái pathname
  const queryString = url.split("?")[1];
  if (queryString) {
    const keyValuePairs = queryString.split("&");
    for (const pair of keyValuePairs) {
      const [key, value] = pair.split("=");
      params[key as keyof IParamsVNpay] = decodeURIComponent(value) as string;
    }
  }
  return params;
};
