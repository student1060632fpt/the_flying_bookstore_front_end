import Image from "next/image";
import BookImage from "./../../assets/images/motthoangtarucroonhangian011.jpg";
import { Button, IconButton, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { TfiComments } from "react-icons/tfi";
import { FaFacebook } from "react-icons/fa6";
import { FaRegShareSquare } from "react-icons/fa";
import BookGallery from "./BookGallery";
import { AiFillThunderbolt } from "react-icons/ai";
import { LuShieldCheck } from "react-icons/lu";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiHashtag } from "react-icons/ci";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

const BookInfo = () => {
  return (
    <div className="flex gap-10 flex-row">
      <div className="xs:basic-0 md:basis-1/4  lg:basis-1/6 ">
        <BookGallery />
      </div>
      <div className="flex-1">
        <h1 className="font-bold text-3xl text-primary">
          Muôn kiếp nhân sinh{" "}
        </h1>
        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <p className="font-semibold">4.5</p>
          </div>
          <div className="flex">
            <div className="flex items-center">
              <TfiComments className="text-secondary" />
              <p className="text-sm text-primary ml-2">20 lượt đánh giá</p>
            </div>
            <div className="flex text-xl text-primary gap-3 items-center ml-5">
              <IconButton color="primary" aria-label="add an alarm">
                <FaFacebook />
              </IconButton>
              <IconButton color="primary" aria-label="add an alarm">
                <FaRegShareSquare />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="flex justify-between my-2">
          <div className="flex gap-5">
            <div className="flex flex-col gap-1">
              <p className="text-sm text-gray-400">Tác giả</p>
              <p className="text-md text-primary font-semibold">Nguyên Phong</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-gray-400">Nhà xuất bản</p>
              <p className="text-md text-primary font-semibold">First News</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-gray-400">Năm xuất bản</p>
              <p className="text-md text-primary font-semibold">2019</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Button variant="outlined" startIcon={<CiHashtag />}>
              Văn học
            </Button>
            <Button
              variant="outlined"
              color="success"
              startIcon={<LuShieldCheck />}
              sx={{ textTransform: "none" }}
            >
              Sách bán chạy của năm
            </Button>
          </div>
        </div>
        <div className="text-md border-l-2 pl-8 my-5">
          <p>
            “Muôn kiếp nhân sinh” là tác phẩm do Giáo sư John Vũ - Nguyên Phong
            viết từ năm 2017 và hoàn tất đầu năm 2020 ghi lại những câu chuyện,
            trải nghiệm tiền kiếp kỳ lạ từ nhiều kiếp sống của người bạn tâm
            giao lâu năm, ông Thomas – một nhà kinh doanh tài chính nổi tiếng ở
            New York. Những câu chuyện chưa từng tiết lộ này sẽ giúp mọi người
            trên thế giới chiêm nghiệm, khám phá các quy luật về luật Nhân quả
            và Luân hồi của vũ trụ giữa lúc trái đất đang gặp nhiều tai ương,
            biến động, khủng hoảng từng ngày.
          </p>
          <p>
            “Muôn kiếp nhân sinh” là một bức tranh lớn với vô vàn mảnh ghép cuộc
            đời, là một cuốn phim đồ sộ, sống động về những kiếp sống huyền bí,
            trải dài từ nền văn minh Atlantis hùng mạnh đến vương quốc Ai Cập cổ
            đại của các Pharaoh quyền uy, đến Hợp Chủng Quốc Hoa Kỳ ngày nay.
          </p>
        </div>
        <h1 className="text-2xl font-bold mb-3">2.000đ/ngày</h1>
        <div className="flex items-center gap-4">
          <div className="flex w-fit border rounded-md h-10">
            <Button variant="text" size="large">
              <FaPlus className="text-secondary" />
            </Button>
            <input title="number" defaultValue={1} type="text" className="text-center w-10" />
            <Button variant="text" size="large">
              <FaMinus className="text-secondary" />
            </Button>
          </div>
          <p>Hiện còn 3 cuốn</p>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
