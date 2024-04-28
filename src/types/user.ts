export type IUser = {
  id: number;
  username: string;
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  birthDate: string; // hoặc có thể sử dụng kiểu Date nếu muốn
  avatarUrl: string | null;
  address: string;
  password: string | null;
  
};
