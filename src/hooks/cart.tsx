import { ICart } from "@/types/cart";
import { StateCreator, create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IUseStoreCart {
  cart: ICart | null;
  addCart: (newCart: ICart) => void;
  removeCart: () => void;
}
const cartSlice: StateCreator<IUseStoreCart, [["zustand/persist", unknown]]> = (
  set
) => ({
  cart: null,
  addCart: (newCart) => {
    set(() => ({ cart: newCart }));
  },
  removeCart: () => set({ cart: null }),
});
export const useStoreCart = create<IUseStoreCart>()(
  persist(cartSlice, {
    name: "cart-storage", // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => sessionStorage),
  })
);
