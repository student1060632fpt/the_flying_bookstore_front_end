import Image from "next/image";
import Background from "./../../../../assets/images/bg-signin.jpg";
import "./../../login/Login.scss";

const Page = () => {

  return (
    <div className="auth">
      <div className="auth__left ">
        <div className="auth__form ">
        </div>
      </div>
      <div className="auth__right">
        <Image src={Background} alt="background" fill className="img" />
      </div>
    </div>
  );
};

export default Page;
