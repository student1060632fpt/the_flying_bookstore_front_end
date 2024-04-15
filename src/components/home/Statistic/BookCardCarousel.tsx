import Image from "next/image";

import BookImg from "@/assets/images/book-cover_null.png";
import { Button } from "@mui/material";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
import { IListing } from "../PromoteSection";

const BookCardCarousel = ({ book }: { book: IListing }) => {
  
  return (
    <Link href="/detail#abc">
      <div className="text-center mb-5">
        <Image
          src={book?.copy?.imageLink || BookImg}
          alt="Picture of the author"
          className="mx-auto bottom-0"
          width={128}
          height={230}
        />
        <h4 className="text-xl font-semibold py-3">{book?.book?.title || "Không có tiêu đề"}</h4>
        <p className="pb-3 text-sm text-secondary">{book?.leaseRate||"Không hợp lệ "}đ/ngày</p>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<CiShoppingCart />}
          sx={{ color: "white", textTransform: "none" }}
        >
          Thêm vào giỏ hàng
        </Button>
      </div>
    </Link>
  );
};

export default BookCardCarousel;
