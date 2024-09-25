import { ICategory } from "@/types/category";
import { create } from "zustand";

interface IStoreSearch {
  categoryParam: ICategory | null;
  titleParam: string | null;
  pageNumber: number;
  allowRent: number;
  allowPurchase: number;
  updateCategoryParam: (arg: ICategory) => void;
  updateTitleParam: (arg: string) => void;
  updatePageNumber: (arg:number) => void;
  updateCategoryAndPageParam:(arg: ICategory) => void;
  updateBookType:(allowRent: number, allowPurchase: number)=>void;
  clearStorage: () => void;
}

export const useStoreSearch = create<IStoreSearch>((set) => ({
  categoryParam: null,
  titleParam:null,
  pageNumber: 1,
  allowRent: 1,
  allowPurchase: 1,
  updateCategoryParam: (newState) => set({ categoryParam: newState }),
  updateCategoryAndPageParam: (categoryParam) => set({ categoryParam,pageNumber:1 }),
  updateTitleParam: (newState) => set({ titleParam: newState }),
  updatePageNumber: (newState) => set({ pageNumber: newState }),
  updateBookType:(allowRent, allowPurchase)=>set({allowRent,allowPurchase}),
  clearStorage: () => set({categoryParam:null,titleParam:null,pageNumber:1})
}));
