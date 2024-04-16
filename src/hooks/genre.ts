import { ICategory } from "@/types/category";
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
      const response = await fetch("http://localhost:8082/api/genre", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      });

      if (response?.ok) {
        const responseData = await response.json();
        set({ listGenre: responseData });
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
