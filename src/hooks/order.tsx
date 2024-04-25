import { create } from "zustand";

interface IOrder {
  order: number | null;
  updateOrder: (arg: number | null) => void;
}

export const useStoreOrder = create<IOrder>((set) => ({
  order: null,
  updateOrder: (newOrder) => {
    set({ order: newOrder });
  },
}));
