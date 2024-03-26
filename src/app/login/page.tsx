'use client'
import Image from "next/image";
import Background from "./../../assets/images/background.jpg";
import { Button } from "@mui/material";
import Link from "next/link";
import FormLogin from "@/components/auth/FormLogin";
import { Metadata } from "next";
import { SITE_NAME } from "@/utils/env";
import "./Login.scss"
import { useState } from "react";
import { useRouter } from "next/navigation";


const Login = () => {
  const [formData, setFormData] = useState({
    loginName: "",
    password: "",
  });
  const router = useRouter()
  const handleFormSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8082/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        redirect:"follow",
        mode:"cors"
      });

      if (response.ok) {
        // Registration successful, handle the response accordingly
        router.push('/')
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
        <h2 className="">
          Đăng nhập
        </h2>
        <div className="auth__form ">
          <FormLogin setFormData={setFormData} formData={formData}/>

          <Button variant="contained" onClick={handleFormSubmit} sx={{ color: "white" }} size="large">
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
