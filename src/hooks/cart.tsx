import {create} from "zustand";

interface IUseStoreCart{
  bear: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (arg: number) => void;
}

export const useStoreCart = create<IUseStoreCart>(set => ({
  bear: 0,
  increasePopulation: () => set((state) => ({bear: state.bear +1})),
  removeAllBears: () => set({bear: 0}),
  updateBears: (newBears) => set({bear: newBears})
})) 
