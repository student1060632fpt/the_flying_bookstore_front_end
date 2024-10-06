import { SITE_NAME } from "@/utils/env"
import { Metadata } from "next"
import ListOrderBuySell from "../../../components/customerOrder/ListOrderBuySell";

export const metadata: Metadata={
  title: `Quản lý đơn mua | ${SITE_NAME}`,
}
const page = () => {
  return <ListOrderBuySell isCustomer={true} />;
};
export default page;
