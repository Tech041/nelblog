import { create } from "zustand";
type UIState = {
  isMobileNavOpen: boolean;
  toggleMobileNav: () => void;
};
export const useUiStore = create<UIState>((set) => ({
  isMobileNavOpen: false,
  toggleMobileNav: () =>
    set((state) => ({
      isMobileNavOpen: !state.isMobileNavOpen,
    })),
}));
