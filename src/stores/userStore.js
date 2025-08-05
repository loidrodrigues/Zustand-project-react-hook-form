import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,
  isLogged: false,

  login: (userData) => set({ user: userData, isLogged: true }),
  logout: () => set({ user: null, isLogged: false }),
}));

export default useUserStore;
