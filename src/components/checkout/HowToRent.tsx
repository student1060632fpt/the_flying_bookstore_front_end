import SearchImage from "./../../assets/images/search.png";
import LoveImage from "./../../assets/images/love.png";
import ScheduleImage from "./../../assets/images/schedule.png";
import Image from "next/image";
import "./Step.scss";

const HowToRent = () => {
  return (
    <div className="container mx-auto howto">
      <h3 className="text-2xl font-semibold text-center text-primary mb-5">
        Quy trình thuê sách
      </h3>
      <div className="grid grid-cols-3">
        <div className="card">
          <div className="icon ">
            <Image src={SearchImage} alt="search" className="" />
          </div>
          <h5>Đến nhận sách</h5>
          <p>
            Sau khi thanh toán thành công. Bạn có thể chọn 1 trong 2 cách sau:
            <br />
            - Bạn hãy đến địa chỉ thuê sách và đưa mã đơn hàng chủ sách để lấy
            sách bạn nhé.
            <br />- Bạn liên hệ chủ sách và đưa mã đơn hàng cho chủ sách, sau đó
            bạn tự đặt ship và thanh toán tiền ship để ship sách về.{" "}
          </p>
        </div>
        <div className="card">
          <Image src={LoveImage} alt="search" className="icon" />
          <h5>Đọc sách</h5>
          <p>
            Gìn giữ sách cẩn thận bạn nhé.
            <br />
            Hãy nhớ sau bạn còn có người khác đọc nữa, nên hay tránh việc viết
            vẽ hay làm rách sách bạn nhé.
          </p>
        </div>
        <div className="card">
          <Image src={ScheduleImage} alt="search" className="icon" />
          <h5>Trả sách</h5>
          <p>
            Vui lòng trả cuốn sách đúng hạn, bạn có thể đặt ship trả sách nhưng
            tính thời gian ship cũng không được quá thời gian trả sách. Sau khi
            chủ sách nhận lại được sách, số tiền còn lại sẽ được hoàn về tài
            khoản của bạn. Nếu bạn cần thêm thời gian, bạn có thể gia hạn thêm
            hoặc mua cuốn sách đó luôn chỉ với 1 click.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToRent;
