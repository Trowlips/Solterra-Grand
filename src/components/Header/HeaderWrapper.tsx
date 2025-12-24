"use client";

import { useSwiperStore } from "@/store/useSwiperStore";
import React from "react";

export default function HeaderWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const activeIndex = useSwiperStore((state) => state.activeIndex);
    return (
        <header
            className={`
                absolute top-0 w-screen flex px-3 m-auto z-50 transition-all duration-700 
                sm:justify-center 
                ${
                    activeIndex
                        ? "bg-white/95 delay-500 duration-1000 py-1.5 shadow-sm"
                        : "bg-transparent delay-500 duration-1000 py-5"
                }
            `}
        >
            {children}
        </header>
    );
}
