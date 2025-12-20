"use client";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import Header from "./components/Header/Header";
import MainSwiper from "./components/mainSwiper/MainSwiper";

export default function Home() {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <div className="bg-background">
            <Header swiper={swiper} activeIndex={activeIndex} />
            <main className="h-dvh">
                <MainSwiper setSwiper={setSwiper} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            </main>
        </div>
    );
}
