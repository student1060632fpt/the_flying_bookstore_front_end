import { Book } from "@/components/createPost/ModalSearchBook";
import { create } from "zustand";

interface IChoosenBook {
  bookChoosen: Book | null;
  updateBook: (arg: Book | null) => void;
}

export const useStoreBook = create<IChoosenBook>((set) => ({
  bookChoosen: null,
  updateBook: (newBook) => {
    console.log({newBook});
    
    set({ bookChoosen: newBook });
  },
}));
