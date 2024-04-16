
export type IListing = {
  id: number;
  ownerId: number | null;
  quantity: number;
  address: string;
  expiryDate: string | null;
  leaseRate: number;
  depositFee: number;
  penaltyRate: number;
  description: string;
  copy: ICopy;
  book: IBook;
  review?:Array<number>;
  bookOwned?:number;
  bookLeasing?: number;
};

interface ICopy {
  id: number;
  bookId: number;
  ownerId: number | null;
  quantity: number;
  imageLink: string;
  damagePercent: number;
  createdDate: string | null;
  updatedDate: string | null;
  deletedDate: string | null;
  copyStatus: "LEASED" | "AVAILABLE"; // Assuming these are the only possible values for copy status
}
export type IBook = {
  id: number;
  isbn: string;
  title: string;
  authors: string[];
  languageCode: string;
  genre: string[];
  publisher: string;
  publishedDate: string;
  pageCount: number;
  size: string;
};