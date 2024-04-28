import { Alert, Box, Button, Divider } from "@mui/material";
import Image from "next/image";
import BookItem from "./BookItem";
import { PiFileTextLight } from "react-icons/pi";
import CartTotal from "../cart/CartTotal";
import "./../cart/Cart.scss";
import { MdOutlineFaceUnlock } from "react-icons/md";
import { BsFileText } from "react-icons/bs";
import CartInfoRent from "../cart/CartInfoRent";
import { PiCalendarCheck } from "react-icons/pi";
import { LuFlag } from "react-icons/lu";
import { CgCreditCard } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Order from "./Order";
import { useStoreOrder } from "../../hooks/order";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import { IOrder, IOrderStatus } from "../../types/order";
import { renderPayment } from "./PaymentStatus";
import { useUrl } from "nextjs-current-url";
import { parseUrlParams } from "./parseUrlParams";
import { IAlert } from "../../app/(auth)/sign-up/[[...sign-up]]/page";
import { IParamsVNpay } from "../../types/checkout";

const Step2 = ({
  handleNext,
  setAlert,
}: {
  handleNext: () => void;
  setAlert: Dispatch<SetStateAction<IAlert>>;
}) => {
  const { order: orderId } = useStoreOrder();
  const [orderDetail, setOrderDetail] = useState<IOrder>();
  const { href: currentUrl } = useUrl() ?? {};
  const updateStatusOrder = async (params: IParamsVNpay) => {
    return await axios
      .request({
        url: `http://localhost:8082/api/leaseOrder/edit/status`,
        params: { id: orderId, status: "PAYMENT_SUCCESS" },
      })
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setAlert({
          open: true,
          message: "Thanh toán thành công",
          severity: "success",
        });
        getDetailOrder()
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getStatusOrder = () => {
    if (!currentUrl) return;
    const params: IParamsVNpay = parseUrlParams(currentUrl);
    if (params.vnp_TransactionStatus == "00") {
      // gọi api thay đổi trạng thái đơn hàng ở đây
      updateStatusOrder(params);
    }
  };
  useEffect(() => {
    getStatusOrder();
  }, [currentUrl]);

  const getDetailOrder = async () => {
    axios
      .request({ url: "http://localhost:8082/api/leaseOrder/" + orderId })
      .then((response) => {
        if (response.data) {
          console.log("response.data", response.data);
          setOrderDetail(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getDetailOrder();
  }, [orderId]);
  const renderAlert = (status?: IOrderStatus | undefined) => {
    if (!status) return <></>;
    let contentAlert = <></>;
    switch (status) {
      case "PAYMENT_SUCCESS":
        contentAlert = (
          <>
            Mời bạn đến địa chỉ cho thuê để lấy tài liệu, sau đó bạn hãy bấm nút
            &apos;Xác nhận lấy hàng&apos; dưới đây
          </>
        );
        break;
      case "ORDERED_PAYMENT_PENDING":
        contentAlert = (
          <>
            Bạn hãy nhanh chóng thanh toán theo phương thức{" "}
            {renderPayment(orderDetail?.paymentMethod)} để kịp lấy hàng
          </>
        );
        break;
      default:
        contentAlert = <>Chưa định nghĩa</>;
        break;
    }
    return (
      <div className="mt-10 w-2/3 mx-auto">
        <Alert severity="info">{contentAlert}</Alert>
      </div>
    );
  };

  return (
    <>
      <div className="w-2/3 mx-auto border rounded-lg py-8 mt-20 px-10">
        <h3 className="mb-5 text-center text-primary text-2xl font-semibold text-primary">
          Đơn hàng được tạo thành công!
        </h3>

        <Order orderDetail={orderDetail} />
      </div>
      {renderAlert(orderDetail?.status)}

      <div className=" mt-10 mb-20 w-2/3 mx-auto flex justify-between">
        <Link href="/">
          <Button
            variant="contained"
            color="secondary"
            sx={{ color: "white", textTransform: "none" }}
            size="large"
            startIcon={<CiShoppingCart />}
          >
            Tiếp tục mua sắm
          </Button>
        </Link>
        <Link href="/my-order">
          <Button
            variant="outlined"
            sx={{ textTransform: "none" }}
            size="large"
          >
            Quản lý đơn hàng
          </Button>
        </Link>

        <Button
          variant="contained"
          sx={{ textTransform: "none", color: "white" }}
          size="large"
          disabled={orderDetail?.status != "PAYMENT_SUCCESS"}
          startIcon={<IoCheckmarkCircleOutline />}
          onClick={handleNext}
        >
          Xác nhận lấy hàng
        </Button>
      </div>
    </>
  );
};

export default Step2;
