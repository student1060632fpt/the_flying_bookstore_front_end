import { ICategory } from "@/types/category";
import axios from "axios";
import { url } from "inspector";
import { StateCreator, create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { genreSliceService } from "@/api/genreService";

type IGenreStore = {
  listGenre: Array<ICategory> | null;
  fetch: () => void;
};
const genreSlice: StateCreator<IGenreStore, [["zustand/persist", unknown]]> = (
  set
) => ({
  listGenre: null,
  fetch: async () => {
    try {
      const data = await genreSliceService();
      set({ listGenre: data });
    } catch (error) {
      throw new Error("Get Genre failed");
    }
  },
});


export const useGenreStore = create<IGenreStore>()(
  persist(genreSlice, {
    name: "genre-storage", // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => localStorage),
  })
);
