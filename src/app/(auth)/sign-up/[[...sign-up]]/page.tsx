"use client";
import Image from "next/image";
import Background from "@/assets/images/bg-signin_animation.gif";
import { Alert, Button, Slide, SlideProps, Snackbar } from "@mui/material";
import Link from "next/link";
import "./../../login/Login.scss";
import FormSignUp from "@/components/auth/FormSignup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { onSubmitService } from "@/api/auth/registerService";
import { IUser } from "@/types/user";
import { useStoreAlert } from "../../../../hooks/alert";

const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IUser>();
  const router = useRouter();
  const { callAlert, callErrorAlert } = useStoreAlert();

  const onSubmit = async (data: IUser) => {
    try {
      const response = await onSubmitService(data);
      if (typeof response !== 'string' && !!response) {
        callAlert("Đăng ký thành công");
        // Registration successful, handle the response accordingly
        router.push("/");
        // router.push("/login"); TODO: after demo
      } else {
        // Trường hợp không có token trong response
        callErrorAlert(response);
      }
    } catch (error: unknown) {
      console.error("Lỗi không xác định:", error);
      callErrorAlert("Đã xảy ra lỗi không xác định. Vui lòng thử lại.");
    }
  };

  return (
    <div className="auth">
      <div className="auth__left ">
        <h2 className="">Đăng ký</h2>
        <div className="auth__form ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormSignUp errors={errors} register={register} />

            <Button
              variant="contained"
              sx={{ color: "white", mt: 2, mb: 1 }}
              size="large"
              fullWidth
              type="submit"
            >
              Đăng ký
            </Button>
          </form>

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
        <Image src={Background} unoptimized alt="background" fill className="img" />
      </div>

    </div>
  );
};

export default SignIn;
