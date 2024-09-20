import { redirect } from 'next/navigation'

const port = process.env.NEXT_PUBLIC_API_URL || "localhost:8082";
const signIn = async (data: any) => {
  
  try {
    const response = await fetch(`http://${port}/api/user/login`, {
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
