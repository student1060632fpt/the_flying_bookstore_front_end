import { Box, Button } from "@mui/material";
import CartInfoRent from "../cart/CartInfoRent";
import CartTotal from "../cart/CartTotal";
import InfoRent from "./InfoRent";
import Pay from "./Pay";
import "./Step.scss";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { useAuthStore } from "@/hooks/user";
import { IFormCheckout } from "@/types/form";
import dayjs from "dayjs";
import { VNPay } from "vnpay";
import { useStoreCart } from "@/hooks/cart";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import AlertSignOut from "../nav/AlertSignOut";
import { IAlert } from "@/app/(auth)/sign-up/[[...sign-up]]/page";

const vnpay = new VNPay({
  tmnCode: "8P19JVPK",
  secureSecret: "KDWIRZHZVFCMABESTHVTOQONWXASFYXI",
  vnpayHost: "https://sandbox.vnpayment.vn",
});

const Step1 = ({ handleNext }: { handleNext: () => void }) => {
  const { profile, token } = useAuthStore();
  const [alert, setAlert] = useState<IAlert>({
    open: false,
    message: "Tạo đơn hàng thành công",
    severity: "success",
  });
  const { cart } = useStoreCart();
  const router = useRouter();
  const [payType, setPayType] = useState<number>(2);

  const defaultValues: IFormCheckout = {
    lastName: profile?.lastName || "",
    firstName: profile?.firstName || "",
    email: profile?.email || "",
    phoneNumber: profile?.phoneNumber || "",
    address: profile?.address || "",
    birthDate: profile?.birthDate ? dayjs(profile.birthDate) : dayjs(),
  };
  const methods = useForm<IFormCheckout>({ defaultValues });
  const urlString = vnpay.buildPaymentUrl({
    vnp_Amount: cart?.total || 0,
    vnp_IpAddr: "1.1.1.1",
    vnp_TxnRef: dayjs().valueOf().toPrecision(),
    vnp_OrderInfo: `Cho userid ${profile?.id} thue sach voi so tien ${cart?.total}`,
    vnp_OrderType: "other",
    vnp_ReturnUrl: `http://localhost:3000/checkout`,
  });

  const convertPaymentType = () => {
    switch (payType) {
      case 0:
        return "COD";
      case 1:
        return "BANK_TRANSFER";
      case 2:
        return "VNPAY";
      default:
        break;
    }
  };
  const onSubmit = async (data: IFormCheckout) => {
    const convertValue = {
      status: "ORDERED_PAYMENT_PENDING",
      listingId: cart?.book?.id,
      lesseeId: profile?.id,
      lesseeAddress: data.address,
      fromDate: dayjs(cart?.dayRent.dateStart).format("YYYY-MM-DD"),
      toDate: dayjs(cart?.dayRent.dateEnd).format("YYYY-MM-DD"),
      paymentMethod: convertPaymentType(),
    };
    console.log({ data, convertValue });
    try {
      const response = await axios.request({
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:8082/api/leaseOrder",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: JSON.stringify(convertValue),
      });
      if (response?.data) {
        setAlert((state) => ({ ...state, open: true }));
        if (payType == 2) {
          router.push(urlString);
        } else {
          handleNext()
        }
      }
    } catch (error) {
      console.log(error);
      setAlert({
        message:"Lỗi",
        open:true,
        severity: "error"
      })
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="step mt-8 grid grid-cols-2">
          {/* thông tin đặt thuê */}
          <div className="card ">
            <h3 className="">Thông tin đặt thuê</h3>
            <InfoRent />
            <h3 className="mt-10">Thông tin đặt hàng</h3>
            <CartInfoRent />
          </div>
          <div className="card">
            <h3 className="">Thông tin thanh toán</h3>
            <CartTotal />
            <h3 className="mt-10">Thanh toán</h3>
            <Pay payType={payType} setPayType={setPayType} />
          </div>
        </div>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2, mb: 5 }}>
          <Link href={"/cart"}>
            <Button color="inherit" variant="outlined" size="large">
              Quay lại giỏ hàng
            </Button>
          </Link>
          <Box sx={{ flex: "1 1 auto" }} />

          <Button size="large" type="submit" variant="contained">
            Tạo đơn hàng
          </Button>
        </Box>
      </form>
      <AlertSignOut alert={alert} setAlert={setAlert} />
    </FormProvider>
  );
};

export default Step1;
