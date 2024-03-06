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

const Step2 = ({ handleNext }: { handleNext: () => void }) => {
  return (
    <>
      <div className="w-2/3 mx-auto border rounded-lg py-8 mt-20 px-10">
        <h3 className="text-center text-primary text-2xl font-semibold text-primary">
          Đơn hàng được tạo thành công!
        </h3>
        <p className="text-gray-500 text-sm mt-1 text-center mb-4 ">
          Mời bạn đến địa chỉ cho thuê để lấy tài liệu
        </p>
        <Order />
      </div>
      <div className="mt-10 w-2/3 mx-auto">
        <Alert severity="info" onClose={() => {}}>
          Sau khi đến được chỗ thuê sách và nhận được sách, bạn hãy bấm nút &apos;Xác
          nhận lấy hàng&apos; dưới đây
        </Alert>
      </div>
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
        <Link href="/">
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
