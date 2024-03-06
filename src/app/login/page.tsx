import Image from "next/image";
import Background from "./../../assets/images/background.jpg";
import { Button } from "@mui/material";
import Link from "next/link";
import FormLogin from "@/components/auth/FormLogin";
import { Metadata } from "next";
import { SITE_NAME } from "@/utils/env";
import "./Login.scss"

export const metadata: Metadata = {
  title: "Login | " + SITE_NAME,
};

const Login = () => {
  return (
    <div className="auth">
      <div className="auth__left ">
        <h2 className="">
          Đăng nhập
        </h2>
        <div className="auth__form ">
          <FormLogin />

          <Button variant="contained" sx={{ color: "white" }} size="large">
            Đăng nhập
          </Button>
          <div className="flex">
            <p className="text-gray-500">Không có tài khoản?</p>
            <Link href="/signin">
              <p className="text-secondary mx-1">Đăng ký</p>
            </Link>
            <p className="text-gray-500">nhé</p>
          </div>
        </div>
      </div>
      <div className="auth__right">
        <Image
          src={Background}
          alt="background"
          fill
          className="img"
        />
      </div>
    </div>
  );
};

export default Login;
