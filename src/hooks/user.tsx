import {create} from 'zustand';

interface IUseAuthStore {
  token: string | null;
  setToken: (arg: string) => void
}

const useAuthStore = create<IUseAuthStore>((set) => ({
  token: null,
  setToken: (token) => set({ token }),
}));

export {useAuthStore};
