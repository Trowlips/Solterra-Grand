"use client";
import { useSwiperStore } from "@/store/useSwiperStore";
import { useSwiper } from "swiper/react";

type SwiperControlPropsType = {
    index: number;
    children: React.ReactNode;
};

export default function SwiperNavButton(props: SwiperControlPropsType) {
    const { index, children } = props;
    const swiper = useSwiper();
    const activeIndex = useSwiperStore((state) => state.activeIndex);

    return (
        <button
            onClick={() => swiper.slideTo(index)}
            className={`${activeIndex === index ? "text-teal-600" : ""}`}
        >
            {children}
        </button>
    );
}
