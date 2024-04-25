"use client";
import Image from "next/image";
import Background from "@/assets/images/background.jpg";
import { Alert, Button, Slide, SlideProps, Snackbar } from "@mui/material";
import Link from "next/link";
import FormLogin from "@/components/auth/FormLogin";
import "./../Login.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { useStoreSearch } from "@/hooks/search";
import { useAuthStore } from "@/hooks/user";
function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}
type IAlert = {
  severity: any;
  open: boolean;
  message: string;
};

const Login = () => {
  const [formData, setFormData] = useState({
    loginName: "",
    password: "",
  });
  const [alert, setAlert] = useState<IAlert>({
    open: false,
    message: "",
    severity: "success",
  });
  const { message, open, severity } = alert;
  const router = useRouter();
  const { setToken } = useAuthStore();
  const getProfile = async (token:string) => {
    try {
      const response = await axios.request({
        url: "http://localhost:8082/api/user/myInfo",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response?.data) {
        setToken(token,response?.data);
        setAlert((state) => ({
          ...state,
          message: "Đăng nhập thành công",
          open: true,
          severity: "success",
        }));
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handleFormSubmit = async () => {
    try {
      const response = await axios.request({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: formData,
        url: "http://localhost:8082/api/user/login",
      });

      if (response.data) {
        // Registration successful, handle the response accordingly
        console.log("b1: response.data", response.data);
        await getProfile(response.data.token)
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      // Handle any network or server errors{}
      const errorTitle = error?.response?.data?.title;
      if (errorTitle) {
        setAlert((state) => ({
          ...state,
          message: errorTitle,
          severity: "error",
          open: true,
        }));
      }
    }
  };
  const handleClose = () => setAlert((state) => ({ ...state, open: false }));

  return (
    <div className="auth">
      <div className="auth__left ">
        <h2 className="">Đăng nhập</h2>
        <div className="auth__form ">
          <FormLogin setFormData={setFormData} formData={formData} />

          <Button
            variant="contained"
            onClick={handleFormSubmit}
            sx={{ color: "white" }}
            size="large"
          >
            Đăng nhập
          </Button>
          <div className="flex">
            <p className="text-gray-500">Không có tài khoản?</p>
            <Link href="/sign-up">
              <p className="text-secondary mx-1">Đăng ký</p>
            </Link>
            <p className="text-gray-500">nhé</p>
          </div>
        </div>
      </div>
      <div className="auth__right">
        <Image src={Background} alt="background" fill className="img" />
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        onClose={handleClose}
        autoHideDuration={7000}
        key={"vertical + horizontal"}
        TransitionComponent={SlideTransition}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Login;
