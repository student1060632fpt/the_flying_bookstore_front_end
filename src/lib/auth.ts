import { FormLogin } from '@/app/login/page';
import { redirect } from 'next/navigation'

const signIn = async (data: FormLogin) => {
  
  try {
    const response = await fetch("http://localhost:8082/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      redirect: "follow",
      mode: "cors"
    });

    if (response.ok) {
      // Đăng nhập thành công, xử lý phản hồi tương ứng
      redirect('/');
    } else {
      throw new Error("Đăng nhập thất bại");
    }
  } catch (error) {
    // Xử lý bất kỳ lỗi mạng hoặc máy chủ nào
  }
};

export { signIn };
