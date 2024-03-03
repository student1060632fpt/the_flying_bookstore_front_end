import CartTotal from "../cart/CartTotal";
import InfoRent from "./InfoRent";
import "./Step.scss"

const Step1 = ({ handleNext }: { handleNext: () => void }) => {
  
  return (
    <div className="step mt-8 grid grid-cols-2 gap-4">
      {/* thông tin đặt thuê */}
      <InfoRent/>
      <div className="card">
        <h3 className="">Thông tin thanh toán</h3>
        <CartTotal/>
      </div>
    </div>
  );
};

export default Step1;
