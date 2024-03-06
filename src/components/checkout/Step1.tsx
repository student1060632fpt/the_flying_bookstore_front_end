import { Box, Button } from "@mui/material";
import CartInfoRent from "../cart/CartInfoRent";
import CartTotal from "../cart/CartTotal";
import InfoRent from "./InfoRent";
import Pay from "./Pay";
import "./Step.scss";
import Link from "next/link";

const Step1 = ({ handleNext }: { handleNext: () => void }) => {
  return (
    <>
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

        <Button size="large" variant="contained" onClick={handleNext}>
          Tạo đơn hàng
        </Button>
      </Box>
    </>
  );
};

export default Step1;
