import { StateCreator, create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IOrder {
  order: number | null;
  updateOrder: (arg: number | null) => void;
  removeOrder: () =>void;
}

const orderSlice: StateCreator<IOrder, [["zustand/persist", unknown]]> = (
  set
) => ({
  order: null,
  updateOrder: (newOrder) => {
    set({ order: newOrder });
  },
  removeOrder: () => set({order:null})
});
export const useStoreOrder = create<IOrder>()(
  persist(orderSlice, {
    name: "order-storage", // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => localStorage),
  })
);
