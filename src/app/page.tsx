"use client";
import Header from "@/app/components/header/Header";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import MainSwiper from "./components/mainSwiper/MainSwiper";

export default function Home() {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);

    console.log("SWIPER: ", swiper);

    return (
        <div className="bg-background">
            <Header swiper={swiper} />
            <main className="h-screen">
                <MainSwiper setSwiper={setSwiper} />
            </main>
        </div>
    );
}
