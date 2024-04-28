import { IBook } from "@/types/book";
import { create } from "zustand";
import { ICommonAlert } from "../types/common";

interface IAlert extends ICommonAlert {
  callAlert: (message: string) => void;
  closeAlert: () => void;
}

export const useStoreAlert = create<IAlert>((set) => ({
  open: false,
  message: "",
  severity: "success",
  callAlert: (message) => {
    set({ message, open: true });
  },
  closeAlert: () => set({ open: false }),
}));
