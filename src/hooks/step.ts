import { StateCreator, create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IStoreStep {
  step: number;
  changeStep: (newStep: number) => void;
  resetStep:()=>void;
}
const stepSlice: StateCreator<IStoreStep, [["zustand/persist", unknown]]> = (
  set
) => ({
  step: 0,
  changeStep: (newStep) => {
    set(() => ({ step: newStep }));
  },
  resetStep:() => set(() => ({ step: 0 }))
});
export const useStoreStep = create<IStoreStep>()(
  persist(stepSlice, {
    name: "step-storage", // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => localStorage),
  })
);
