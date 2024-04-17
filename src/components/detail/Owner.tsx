import Image from "next/image";
import Avatar from "@/assets/images/no avatar.jpeg";
import { IPropsBook } from "./DocumentInfo";

const Owner = ({book}:IPropsBook) => {
  return (
    <div className="border py-4 px-6">
      <h3 className="text-primary font-semibold text-xl">Chủ sách</h3>
      <div className="flex items-center gap-3 mt-3">
        <div className="relative w-16 h-16">
          <Image src={book?.user?.avatarUrl? book?.user?.avatarUrl:Avatar} alt="ava" fill className="rounded-lg" />
        </div>
        <div className="">
          <h5 className="font-semibold mb-1">{book?.user.lastName} {book?.user.firstName}</h5>
        </div>
      </div>
      <div className="mt-3 flex justify-between">
        <p className="text-primary">Số sách hiện có</p>
        <p className="font-semibold">{book?.bookOwned}</p>
      </div>
      
      <div className="mt-3 flex justify-between">
        <p className="text-primary">Số sách đang cho thuê</p>
        <p className="font-semibold">{book?.bookLeasing}</p>
      </div>
      
    </div>
  );
};

export default Owner;
