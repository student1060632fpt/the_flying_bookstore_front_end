import Image from "next/image";
import Background from "./../../../../assets/images/background.jpg";
import "./../Login.scss";

const Login = () => {

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

export default Login;
