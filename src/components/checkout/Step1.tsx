import CartInfoRent from "../cart/CartInfoRent";
import CartTotal from "../cart/CartTotal";
import InfoRent from "./InfoRent";
import Pay from "./Pay";
import "./Step.scss";

const Step1 = ({ handleNext }: { handleNext: () => void }) => {
  return (
    <div className="step mt-8 grid grid-cols-2">
      {/* thông tin đặt thuê */}
      <InfoRent />
      <div className="card">
        <h3 className="">Thông tin thanh toán</h3>
        <CartTotal />
      </div>
      <div className="card">
        <h3>Thanh toán</h3>
        <Pay />
      </div>


      <div className="card">
        <h3>Thông tin đặt hàng</h3>
        <CartInfoRent />
      </div>
    </div>
  );
};

export default Step1;
