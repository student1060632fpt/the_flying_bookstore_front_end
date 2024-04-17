import { Dayjs } from "dayjs";


export type IFormCheckout = {
  lastName: string;
  firstName: string;
  email: string;
  phoneNumber: string;
  address: string;
  birthDate: Dayjs;
};