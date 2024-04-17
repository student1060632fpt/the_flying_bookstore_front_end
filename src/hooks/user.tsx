import { IUser } from "@/types/user";
import { StateCreator, create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IUseAuthStore {
  profile: IUser | null;
  isLogin: boolean;
  token: string | null;
  setToken: (arg: string, profile: IUser) => void;
  removeToken: () => void;
}
const authSlice: StateCreator<IUseAuthStore, [["zustand/persist", unknown]]> = (
  set
) => ({
  profile: null,
  isLogin: false,
  token: null,
  removeToken: () => set({ token: null, isLogin: false, profile: null }),
  setToken: async (token, profile) => {
    set({ token, isLogin: true, profile });
  },
});
const useAuthStore = create<IUseAuthStore>()(
  persist(authSlice, {
    name: "auth-storage",
    storage: createJSONStorage(() => localStorage),
  })
);

export { useAuthStore };
