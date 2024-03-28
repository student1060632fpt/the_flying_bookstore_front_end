import { SITE_NAME } from "@/utils/env"
import { Metadata } from "next"

export const metadata: Metadata={
  title: `Thêm bài đăng | ${SITE_NAME}`
}
const layout = ({children}:{children: React.ReactNode}) => {
  return children
}

export default layout