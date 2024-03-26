"use client";
import Image from "next/image";
import Background from "./../../assets/images/bg-signin.jpg";
import { Button } from "@mui/material";
import Link from "next/link";
import FormLogin from "@/components/auth/FormLogin";
import "./../login/Login.scss";
import FormSignin from "@/components/auth/FormSignin";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("http://localhost:8082/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
          email: "",
          firstName: "",
          lastName: "",
          phoneNumber: "",
          birthDate: "",
        }),
        redirect: "follow",
        mode: "cors",
      });

      if (response.ok) {
        // Registration successful, handle the response accordingly
        router.push("/login");
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      // Handle any network or server errors
    }
  };

  return (
    <div className="auth">
      <div className="auth__left ">
        <h2 className="">Đăng ký</h2>
        <div className="auth__form ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormSignin errors={errors} register={register} />

            <Button
              variant="contained"
              sx={{ color: "white" }}
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
        <Image src={Background} alt="background" fill className="img" />
      </div>
    </div>
  );
};

export default SignIn;
