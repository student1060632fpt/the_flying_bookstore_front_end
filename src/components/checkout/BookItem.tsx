import Image from "next/image";
import BookImage from "@/assets/images/book loading.gif";
import Link from "next/link";
import { IOrder } from "../../types/order";
import { formatCurrency } from "../../utils/helps";

const BookItem = ({ orderDetail }: { orderDetail?: IOrder | undefined }) => {
  return (
    <div className="hover:shadow-lg hover:shadow-indigo-500/50 ease-in-out duration-200 p-3 rounded-lg book flex justify-between align-center  mt-5 gap-5">
      <div className="flex">
        <div className="relative w-32 h-48 mr-6">
          <Link href="/detail#isbn">
            <Image
              src={
                orderDetail?.listing.copy.imageLink
                  ? orderDetail?.listing.copy.imageLink
                  : BookImage
              }
              alt="book"
              fill
              className="object-cover rounded-lg"
            />
          </Link>
        </div>
        <div className="flex flex-col  justify-center">
          <Link href="/detail#isbn">
            <h5 className="text-lg font-semibold">{orderDetail?.listing.book.title}</h5>
          </Link>
          <p className="text-sm text-gray-400">{orderDetail?.listing.book.authors}</p>
        </div>
      </div>
      <div className="flex items-center ">
        <p className="text-sm mr-3">Số lượng: </p>
        <p className="text-sm text-gray-400">1</p>
      </div>
      <div className="flex flex-col  justify-center">
        <div className="flex justify-between">
          <p className="text-sm mr-8">Giá thuê: </p>
          <p className="text-sm text-gray-400">{formatCurrency(orderDetail?.leaseOrder.leaseOrderDetails[0].leaseRate)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm">Cọc: </p>
          <p className="text-sm text-gray-400">{formatCurrency(orderDetail?.leaseOrder.leaseOrderDetails[0].depositFee)}</p>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
