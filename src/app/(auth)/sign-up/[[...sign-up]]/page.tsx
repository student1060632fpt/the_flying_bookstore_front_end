import Image from "next/image";
import Background from "./../../../assets/images/bg-signin.jpg";
import "./../../login/Login.scss";
import { SignIn, SignUp } from "@clerk/nextjs";

const Page = () => {

  return (
    <div className="auth">
      <div className="auth__left ">
        <div className="auth__form ">
          <SignUp afterSignUpUrl={"/"}/>
        </div>
      </div>
      <div className="auth__right">
        <Image src={Background} alt="background" fill className="img" />
      </div>
    </div>
  );
};

export default Page;
