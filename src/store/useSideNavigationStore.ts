import { create } from "zustand";

type SwiperStoreType = {
    isOpen: boolean;
    toggleOpen: () => void;
};

export const useSideNavigationStore = create<SwiperStoreType>((set) => ({
    isOpen: false,
    toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
