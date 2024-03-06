import Image from "next/image";
import Background from "./../../assets/images/bg-signin.jpg";
import { Button } from "@mui/material";
import Link from "next/link";
import FormLogin from "@/components/auth/FormLogin";
import { Metadata } from "next";
import { SITE_NAME } from "@/utils/env";
import "./../login/Login.scss"
import FormSignin from "@/components/auth/FormSignin";

export const metadata: Metadata = {
  title: "Sign In | " + SITE_NAME,
};

const SignIn = () => {
  return (
    <div className="auth">
      <div className="auth__left ">
        <h2 className="">
          Đăng ký
        </h2>
        <div className="auth__form ">
          <FormSignin />

          <Button variant="contained" sx={{ color: "white" }} size="large">
            Đăng ký
          </Button>
          <div className="flex">
            <p className="text-gray-500">Có tài khoản rồi?</p>
            <Link href="/login">
              <p className="text-secondary mx-1">Đăng nhập</p>
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

export default SignIn;
