import Image from "next/image";
import Background from "./../../../assets/images/background.jpg";
import FormLogin from "@/components/auth/FormLogin";
import "./../Login.scss";

import { SignIn, SignUp } from "@clerk/nextjs";
export type FormLogin = {
  loginName: string;
  password: string;
};

const Login = () => {

  return (
    <div className="auth">
      <div className="auth__left ">
        <div className="auth__form ">
          <SignIn afterSignInUrl={"/"}/>
        </div>
      </div>
      <div className="auth__right">
        <Image src={Background} alt="background" fill className="img" />
      </div>
    </div>
  );
};

export default Login;
