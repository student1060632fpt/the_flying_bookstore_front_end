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
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import dayjs from "dayjs";

const schema = yup.object({
  lastName: yup.string().required(),
  firstName: yup.string().required(),
  address: yup.string().required(),
  email: yup.string().email().required(),
  birthDate: yup.date().required(),
  phoneNumber:yup.string().required()
}).required();

const Step1 = ({ handleNext }: { handleNext: () => void }) => {
  import dayjs from "dayjs";

  const { profile } = useAuthStore();
  const methods = useForm<IFormCheckout>({
    defaultValues: {
      lastName: profile?.lastName || "",
      firstName: profile?.firstName || "",
      email: profile?.email || "",
      phoneNumber: profile?.phoneNumber || "",
      address: profile?.phoneNumber || "",
      birthDate: profile?.birthDate ? dayjs(profile.birthDate).toDate() : new Date(),
    },
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: IFormCheckout) => console.log(data);
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
            <Pay />
          </div>
        </div>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2, mb: 5 }}>
          <Link href={"/cart"}>
            <Button color="inherit" variant="outlined" size="large">
              Quay lại giỏ hàng
            </Button>
          </Link>
          <Box sx={{ flex: "1 1 auto" }} />

          <Button size="large" type="submit" variant="contained" onClick={handleNext}>
            Tạo đơn hàng
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};

export default Step1;
