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
export type ICartRent =   ICartCount & {
  dayRent: IFormValueDayRent;
  book: IListing
};
export type ICartBuy = {
  bookId: IListing["id"]
}
export type ICart = {
  rent: ICartRent|null,
  buy: ICartBuy|null
}