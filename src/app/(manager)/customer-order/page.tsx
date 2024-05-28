import { SITE_NAME } from "@/utils/env"
import { Metadata } from "next"
import ListOrderMain from "../../../components/customerOrder/ListOrderMain";

export const metadata: Metadata={
  title: `Đơn hàng của khách | ${SITE_NAME}`,
}
const CustomerOrder = () => {
  return <ListOrderMain isCustomer={true} />;
};
export default CustomerOrder;
