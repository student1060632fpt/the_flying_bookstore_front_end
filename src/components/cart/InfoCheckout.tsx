import React, { useEffect, useState } from 'react'
import CartInfoItem, { CartInfoItemProps } from './CartInfoItem'
import { IListing } from '../../types/book'
import { GrUserManager } from 'react-icons/gr'
import { RiCalendarTodoLine, RiMapPin2Line } from 'react-icons/ri'
import { PiMoney, PiPhone } from 'react-icons/pi'
import { GiMoneyStack } from 'react-icons/gi'
import { TbSum } from 'react-icons/tb'
import dayjs from 'dayjs'
import { formatCurrency, formatPhoneNumber } from '../../utils/helps'
import { useStoreCart } from '../../hooks/cart'
import { getBookDetailService } from '../../api/bookListService'

const InfoCheckout = ({ tabNum }: { tabNum: number }) => {
  const cart = useStoreCart(state => state.cart)
  const [book, setBook] = useState<IListing | undefined>(cart?.rent?.book);
  useEffect(() => {
    const callApiGetBookDetail = async () => {
      if (tabNum == 0) {
        return;
      }
      const bookId = cart.buy?.bookId;
      if (!bookId)
        return;
      try {
        const newBook = await getBookDetailService(bookId.toString());
        if (newBook) {
          setBook(newBook);
        }
      } catch (error) {
        console.log({ error });
      }
    }
    callApiGetBookDetail();
  }, [])
  const listUserInfo: Array<CartInfoItemProps> = [
    {
      title: `Người ${tabNum == 1 ? `bán` : `cho thuê`}`,
      description: `${book?.user.lastName} ${book?.user.firstName}`,
      children: <GrUserManager className="total__icon" />
    },
    ...(tabNum == 0 ? [
      {
        title: 'Thời gian thuê',
        description: `${dayjs(cart?.rent?.dayRent.dateStart).format("DD/MM/YYYY")} - ${dayjs(cart?.rent?.dayRent.dateEnd).format("DD/MM/YYYY")}`,
        children: <RiCalendarTodoLine className="total__icon" />
      }
    ] : []),
    {
      title: 'Địa chỉ',
      description: book?.address,
      children: <RiMapPin2Line className="total__icon" />
    },
    {
      title: 'Số điện thoại',
      description: formatPhoneNumber(book?.user.phoneNumber),
      children: <PiPhone className="total__icon" />
    },
    ...(tabNum == 0 ? [
      {
        title: 'Số ngày thuê',
        description: cart?.rent?.duration,
        children: <RiCalendarTodoLine className="total__icon" />
      },
      {
        title: 'Tiền thuê',
        description: formatCurrency(cart?.rent?.totalRent),
        children: <PiMoney className="total__icon" />
      },
      {
        title: 'Tiền cọc',
        description: formatCurrency(cart?.rent?.book.depositFee),
        children: <GiMoneyStack className="total__icon" />
      },
      {
        title: 'Tổng cộng',
        description: formatCurrency(cart?.rent?.total),
        children: <TbSum className="total__icon" />
      },
    ] : []),
    {
      title: 'Giá mua',
      description: formatCurrency(book?.price),
      children: <TbSum className="total__icon" />
    },

  ]
  return (
    <div className="total">
      {listUserInfo.map(({ children, description, title }, index) => (<CartInfoItem key={index * 2} title={title} description={description} >{children}</CartInfoItem>))}
    </div>
  )
}

export default InfoCheckout