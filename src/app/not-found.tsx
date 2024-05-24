import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Không tìm thấy</h2>
      <p>Không thể tìm thấy trang bạn cần</p>
      <Link href="/">Quay lại trang chủ</Link>
    </div>
  )
}