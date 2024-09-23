"use client";
import Image from "next/image";
import Background from "@/assets/images/background.jpg";
import { Alert, Button, Slide, SlideProps, Snackbar } from "@mui/material";
import Link from "next/link";
import FormLogin from "@/components/auth/FormLogin";
import "./../Login.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/hooks/user";
import { IUserLogin } from "@/types/user";

import { getProfileService, handleFormSubmitService } from "@/api/auth/loginService";
import { ICommonAlert } from "../../../../types/common";

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

const Login = () => {
  const [formData, setFormData] = useState({} as IUserLogin);
  const [alert, setAlert] = useState<ICommonAlert>({
    open: false,
    message: "",
    severity: "success",
  });
  const { message, open, severity } = alert;
  const router = useRouter();
  const { setToken } = useAuthStore();
  const getProfile = async (token: string) => {
    const data = await getProfileService(token);
    if (data) {
      setToken(token, data);
      setAlert((state) => ({
        ...state,
        message: "Đăng nhập thành công",
        open: true,
        severity: "success",
      }));
      router.push("/");
    }
  };
  const handleFormSubmit = async () => {
    const data = await handleFormSubmitService(formData);
    if (data) {
    // Registration successful, handle the response accordingly
      await getProfile(data.token);
    } else {3
      throw new Error("Registration failed");
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
