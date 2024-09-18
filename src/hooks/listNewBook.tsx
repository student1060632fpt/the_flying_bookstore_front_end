import { IListing } from "@/types/book";
import { PageResponse } from "@/types/page";
import axios, { AxiosResponse } from "axios";
import { StateCreator, create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { getAllBookService } from "@/api/bookListService";

type IListBookStore = {
  listNewBook: PageResponse<IListing> | null;
  fetch: () => void;
};
const bookSlice: StateCreator<IListBookStore, [["zustand/persist", unknown]]> = (
  set
) => ({
  listNewBook: null,
  fetch: async () => {
    try {
      const data = await getAllBookService();
      if (data) {
        set({ listNewBook: data});
      } else {
        throw new Error("Get Book failed");
      }
    } catch (error) {
      throw new Error("Get Book failed");
    }
  },
});

export const useListNewBookStore = create<IListBookStore>()(
  persist(bookSlice, {
    name: "new-listing-storage", // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => localStorage),
  })
);
