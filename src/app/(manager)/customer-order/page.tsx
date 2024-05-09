import MyOrder from "../my-order/[...status]/page";
import { SITE_NAME } from "@/utils/env"
import { Metadata } from "next"

export const metadata: Metadata={
  title: `Đơn hàng của khách | ${SITE_NAME}`,
}
const CustomerOrder = () => {
  return <MyOrder isCustomer={true} />;
};
export default CustomerOrder;
