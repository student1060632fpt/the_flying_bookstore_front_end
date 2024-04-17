import { ICategory } from "@/types/category";
import axios from "axios";
import { url } from "inspector";
import { StateCreator, create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

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
      const response = await axios.request({
        headers: {
          "Content-Type": "application/json",
        },
        url: "http://localhost:8082/api/genre",
      });

      if (response?.data) {
        set({ listGenre: response.data });
      } else {
        throw new Error("Get Genre failed");
      }
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
