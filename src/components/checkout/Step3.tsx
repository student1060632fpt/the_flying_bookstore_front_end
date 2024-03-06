import React from 'react'
import Order from './Order'
import Link from 'next/link'
import { Button } from '@mui/material'
import { CiShoppingCart } from 'react-icons/ci'

const Step3 = () => {
  return (
    <>
      <div className="w-2/3 mx-auto border rounded-lg py-8 mt-20 px-10">
        <h3 className="text-center text-primary text-2xl font-semibold text-primary">
        Lấy thành công đơn hàng!
        </h3>
        <p className="text-gray-500 text-sm mt-1 text-center mb-4 ">
        Đọc sách vui bạn nhé!
        </p>
        <Order status="Đã lấy hàng"/>
      </div>
      
      <div className=" mt-10 mb-20 w-2/3 mx-auto flex justify-between">
        <Link href="/">
          <Button
            variant="contained"
            color="secondary"
            sx={{ color: "white", textTransform: "none" }}
            size="large"
            startIcon={<CiShoppingCart />}
          >
            Tiếp tục mua sắm
          </Button>
        </Link>
        <Link href="/">
          <Button
            variant="outlined"
            sx={{ textTransform: "none" }}
            size="large"
          >
            Quản lý đơn hàng
          </Button>
        </Link>

      </div>
    </>
  )
}

export default Step3