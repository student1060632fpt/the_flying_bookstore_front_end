import { IBook } from "@/types/book";
import { create } from "zustand";

interface IChoosenBook {
  bookChoosen: IBook | null;
  updateBook: (arg: IBook | null) => void;
}

export const useStoreBook = create<IChoosenBook>((set) => ({
  bookChoosen: null,
  updateBook: (newBook) => {
    set({ bookChoosen: newBook });
  },
}));
