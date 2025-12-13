"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
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
        <div className="relative h-full xl:static">
            <Bars3Icon
                onClick={() => setIsSideBarOpen((prev) => !prev)}
                className={`
                    absolute z-10 top-0 right-0 h-full w-8 transition-transform duration-500 ease-in-out transform-gpu backface-hidden cursor-pointer text-teal-600
                    hover:scale-120
                    xl:h-20 xl:top-2 xl:right-9
                    2xl:right-12
                    ${
                        isSideBarOpen
                            ? "opacity-0 scale-20"
                            : "opacity-100 scale-100"
                    }
                    
                    `}
            />
            {/* ${Boolean(activeIndex) ? "text-black" : "text-white"} */}
            {/* <span>{`${isSideBarOpen}`}</span> */}

            <div
                className={`
                    fixed z-10 top-0 right-0 h-screen w-1/2 bg-slate-500 transition-all duration-400 text-white
                    px-3 pt-3
                    lg:w-2/5
                    xl:w-1/4
                    ${isSideBarOpen ? "opacity-100" : "translate-x-full opacity-0"}
                    `}
            >
                <div
                    className="
                        flex flex-row justify-end items-center
                        ss:h-15
                        sm:h-18 sm:w-11/12
                        lg:w-9/10
                        xl:w-11/12
                    "
                >
                    <button
                        onClick={() => setIsSideBarOpen((prev) => !prev)}
                        className="cursor-pointer"
                    >
                        <XMarkIcon
                            color="white"
                            className={`h-8 w-8 transform-gpu hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer
                        ${
                            isSideBarOpen
                                ? "opacity-100 rotate-0 scale-100"
                                : "opacity-0 -rotate-90 scale-50"
                        }
                    `}
                        />
                    </button>
                </div>
                <hr />
                <div className="py-3 px-6">
                    {/* <span>Learn more about our:</span> */}
                    <ul
                        className="
                            flex flex-col items-start gap-5 md:text-[1rem]
                            lg:text-[1.2rem]
                            xl:text-[1.3rem] xl:gap-8
                        "
                    >
                        <li>Pools</li>
                        <li>Villas</li>
                        <li className="ml-5">Cabins (selected)</li>
                        <li>Beach</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
