import Image from 'next/image'
import React from 'react'
import BookImg from "./../../assets/images/loading-book.gif";
import { IListing } from '../../types/book';

const BookDetailInfo = ({book}:{book?: IListing}) => {
  return (
    <><div className="basis-2/12 relative w-32 h-48">
      <Image fill src={book?.copy.imageLink || BookImg} alt="d" className="object-contain rounded-lg" unoptimized />
    </div>
      <div className="basis-4/12 flex flex-col justify-center">
        <h4 className="text-primary font-semibold text-lg">
          {book?.book.title}
        </h4>
        <p className="text-sm text-gray-500 ">{book?.book.authors}</p>
      </div>
      <div className="basis-2/12 flex flex-col justify-center">
        <p className="">Số lượng: 1</p>
      </div></>
  )
}

export default BookDetailInfo