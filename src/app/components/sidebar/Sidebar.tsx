"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { X } from "lucide-react";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";

type SideBarPropTypes = {
    swiper: SwiperType | null;
    activeIndex?: number;
};

function Sidebar(props: SideBarPropTypes) {
    const { swiper, activeIndex } = props;
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    return (
        <div className="h-full relative">
            <Bars3Icon
                onClick={() => setIsSideBarOpen((prev) => !prev)}
                className={`
                    absolute z-10 top-0 right-0 h-full w-8 transition-transform duration-500 ease-in-out transform-gpu backface-hidden cursor-pointer text-teal-600
                    hover:scale-120
                    md:-left-2
                    xl:h-20 xl:top-2 xl:right-9
                    2xl:right-12
                    `}
            />
            {/* ${Boolean(activeIndex) ? "text-black" : "text-white"} */}
            {/* <span>{`${isSideBarOpen}`}</span> */}

            <div
                className={`
                    fixed z-10 top-0 right-0 h-dvh w-dvw flex justify-end transition-all duration-500
                    ${
                        isSideBarOpen
                            ? "backdrop-blur-[2px] shadow-lg opacity-100"
                            : "translate-x-full opacity-0 delay-300"
                    }
                    `}
            >
                <div
                    className={`
                        h-full bg-white w-2/5 shadow-2xl transition-all duration-500 ease-out
                        ${
                            isSideBarOpen
                                ? "opacity-100"
                                : "translate-x-full opacity-0"
                        }
                    `}
                >
                    {/* Sidebar Header */}
                    <div className="p-6 flex justify-between items-center border-b border-slate-100">
                        <span className="font-serif font-bold text-xl tracking-widest text-slate-900">
                            MENU
                        </span>
                        <button
                            onClick={() => setIsSideBarOpen(false)}
                            className="text-slate-400 hover:text-teal-600 transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
