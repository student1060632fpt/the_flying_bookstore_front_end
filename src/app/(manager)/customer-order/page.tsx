import { SITE_NAME } from "@/utils/env"
import { Metadata } from "next"
import ListOrderMain from "../../../components/customerOrder/ListOrderMain";
import { OrderType } from "../../../types/order";

export const metadata: Metadata={
  title: `Đơn ${OrderType.Leasor} | ${SITE_NAME}`,
}
const CustomerOrder = () => {
  return <ListOrderMain orderType={OrderType.Leasor} />;
};
export default CustomerOrder;
