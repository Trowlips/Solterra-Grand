import { create } from "zustand";

import type { Swiper as SwiperType } from "swiper";

type SwiperStoreType = {
    activeIndex: number;
    swiper: SwiperType | null;
    setActiveIndex: (i: number) => void;
    setSwiperInstance: (swiper: SwiperType) => void;
};

export const useSwiperStore = create<SwiperStoreType>((set) => ({
    activeIndex: 0,
    swiper: null,
    setActiveIndex: (index: number) => set(() => ({ activeIndex: index })),
    setSwiperInstance: (swiper: SwiperType) => set(() => ({ swiper: swiper })),
}));
