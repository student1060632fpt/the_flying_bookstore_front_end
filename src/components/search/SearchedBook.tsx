import Image from "next/image";
import BookImage from "@/assets/images/book loading.gif";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
import { IListing } from "../home/PromoteSection";
import styles from "./SearchedBook.module.css"; // Import external CSS file
import { formatCurrency } from "@/utils/helps";
const SearchedBook = ({ book }: { book: IListing }) => {
  return (
    <Link href={`/detail/${book.id}`}>
      <div className="rounded-xl ease-in-out duration-300 hover:shadow-lg hover:shadow-indigo-500/40 py-5 px-3 ">
        <Image
          src={book?.copy?.imageLink || BookImage}
          alt={`Cover of ${book?.book?.title}`}
          className={`border rounded-xl mx-auto `} // Use external CSS class
          width={128}
          height={230}
        />
        <h3 className="font-semibold text-lg text-primary my-2 truncate">
          {book?.book?.title}
        </h3>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">{`${formatCurrency(book?.leaseRate)}/ngày`||"Không hợp lệ "}</p>
          <CiShoppingCart className="text-2xl mx-3" />
        </div>
      </div>
    </Link>
  );
};

export default SearchedBook;
