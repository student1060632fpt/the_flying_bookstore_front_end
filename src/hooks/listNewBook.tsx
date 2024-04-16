import { ICategory } from "@/components/home/Category/BookCategory";
import { IListing } from "@/types/book";
import { PageResponse } from "@/types/page";
import axios, { AxiosResponse } from "axios";
import { StateCreator, create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

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
      const response:  AxiosResponse<PageResponse<IListing>>  = await axios.request( {
        url:"http://localhost:8082/api/listing/search",
        method: "GET",
      });

      if (response?.data) {
        set({ listNewBook: response?.data});
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
