import { SITE_NAME } from "@/utils/env"
import { Metadata } from "next"
import ListOrderBuySell from "../../../components/customerOrder/ListOrderBuySell";

export const metadata: Metadata={
  title: `Quản lý đơn bán | ${SITE_NAME}`,
}

const page = () => {
  return <ListOrderBuySell isCustomer={false} />;
};
export default page;
