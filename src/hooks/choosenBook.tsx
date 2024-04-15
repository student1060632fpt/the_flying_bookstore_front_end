import { IBook } from "@/components/createPost/ModalSearchBook";
import { create } from "zustand";

interface IChoosenBook {
  bookChoosen: IBook | null;
  updateBook: (arg: IBook | null) => void;
}

export const useStoreBook = create<IChoosenBook>((set) => ({
  bookChoosen: null,
  updateBook: (newBook) => {
    console.log({newBook});
    
    set({ bookChoosen: newBook });
  },
}));
