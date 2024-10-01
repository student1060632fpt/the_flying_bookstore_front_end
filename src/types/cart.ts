import { Dayjs } from "dayjs";
import { IListing } from "./book";

export type IFormValueDayRent = {
  dateStart: Dayjs | null;
  dateEnd: Dayjs | null;
};

type ICartCount = {
  total: number,
  totalRent: number,
  duration: number
}

export type ICartBook = {
  bookId: IListing["id"]
}
export type ICartRent = ICartCount & ICartBook & {
  dayRent: IFormValueDayRent;
};

export type ICart = {
  rent: ICartRent | null,
  buy: ICartBook | null
}