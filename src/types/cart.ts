import { Dayjs } from "dayjs";
import { IListing } from "./book";

export type IFormValueDayRent = {
  dateStart: Dayjs | null;
  dateEnd: Dayjs | null;
};

type ICartCount =  {
  total: number,
  totalRent: number,
  duration: number
}
export type ICart =   ICartCount & {
  dayRent: IFormValueDayRent;
  book: IListing
};