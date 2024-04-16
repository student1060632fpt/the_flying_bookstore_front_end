import { StateCreator, create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IUseAuthStore {
  isLogin: boolean;
  token: string | null;
  setToken: (arg: string) => void;
  removeToken: () => void;
}
const authSlice: StateCreator<IUseAuthStore, [["zustand/persist", unknown]]> = (
  set
) => ({
  isLogin: false,
  token: null,
  removeToken: () => set({ token: null, isLogin: false }),
  setToken: (token) => set({ token, isLogin: true }),
});
const useAuthStore = create<IUseAuthStore>()(
  persist(authSlice, {
    name: "auth-storage",
    storage: createJSONStorage(() => localStorage),
  })
);

export { useAuthStore };
