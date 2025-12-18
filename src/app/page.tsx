"use client";
import Header from "@/app/components/header/Header";
import { useEffect, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import MainSwiper from "./components/mainSwiper/MainSwiper";

export default function Home() {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <div className="bg-background">
            <Header swiper={swiper} activeIndex={activeIndex} />
            <main className="h-screen">
                <MainSwiper setSwiper={setSwiper} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            </main>
        </div>
    );
}
