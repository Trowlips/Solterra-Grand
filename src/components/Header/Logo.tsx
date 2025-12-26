"use client";
import Image from "next/image";

import Icon from "@/app/icon.png";
import { useSwiperStore } from "@/store/useSwiperStore";

function Logo() {
    const swiper = useSwiperStore((state) => state.swiper);
    const activeIndex = useSwiperStore((state) => state.activeIndex);
    return (
        <button
            onClick={() => swiper?.slideTo(0)}
            className={`flex justify-center items-center gap-4 z-10 h-10 cursor-pointer
                ss:h-15
                sm:h-18 `}
        >
            <div
                className="
                relative h-10 w-10 transition-[height,width]
                md:h-13 md:w-13
                "
            >
                <Image
                    src={Icon}
                    fill
                    className="object-contain"
                    alt="Solterra Grand logo"
                    quality={100}
                />
            </div>
            <span
                className={`
                    text-xl font-semibold text-primary-100 transition-colors duration-500
                    md:text-[1.3rem]
                    lg:text-[1.8rem]
                    xl:text-[2rem]
                    ${activeIndex ? "text-slate-900" : "text-white"}
                `}
            >
                Solterra <span className="text-teal-600">GRAND</span>
            </span>
        </button>
    );
}

export default Logo;
