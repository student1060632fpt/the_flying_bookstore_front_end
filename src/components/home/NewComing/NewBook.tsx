import Image from "next/image"
import Book from "./nhat-ky-am-ap-con-duong-di-dao-conduongdidao-jacket.jpg"
import "./NewBook.scss"
const NewBook = () => {
  return (
    <div className="">
      <div className="relative w-8/12 ">
        <Image
          src={Book}
          alt="Picture of the author"
          className="new-book-image"
        />
        <div className="discount bg-secondary">40%</div>
      </div>
      <h4 className="text-lg font-semibold pt-3">Nhật ký ấm áp</h4>
      <p className="text-gray-400 text-sm">5.000đ/ngày</p>
    </div>
  )
}

export default NewBook