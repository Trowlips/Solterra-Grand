"use client";
import NavLink from "@/components/Header/NavLink";
import { useSwiperStore } from "@/store/useSwiperStore";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Calendar, Phone, X } from "lucide-react";
import React, { useState } from "react";

type SideBarPropTypes = {
    children: React.ReactNode;
};

function Sidebar({ children }: SideBarPropTypes) {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const activeIndex = useSwiperStore((state) => state.activeIndex);
    const swiper = useSwiperStore((state) => state.swiper);

    function handleNavLinkClick(index: number) {
        swiper?.slideTo(index);
        setIsSideBarOpen(false);
    }

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

            <div
                className={`
                    fixed z-10 top-0 right-0 h-dvh w-dvw flex justify-end transition-opacity duration-500
                    ${
                        isSideBarOpen
                            ? "backdrop-blur-[2px] shadow-lg opacity-100"
                            : "translate-x-full opacity-0 delay-300"
                    }
                    `}
            >
                <div
                    className={`
                        flex flex-col h-full bg-white w-2/5 shadow-2xl transition-all duration-500 ease-out
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
                            <X size={24} className="cursor-pointer" />
                        </button>
                    </div>

                    <div className="flex flex-col flex-1 py-10 px-6 gap-5">
                        <NavLink
                            index={1}
                            activeIndex={activeIndex}
                            handleNavLinkClick={handleNavLinkClick}
                            label="The Arrival"
                        />
                        <NavLink
                            index={2}
                            activeIndex={activeIndex}
                            handleNavLinkClick={handleNavLinkClick}
                            label="Main Lobby"
                        />
                        <NavLink
                            index={3}
                            activeIndex={activeIndex}
                            handleNavLinkClick={handleNavLinkClick}
                            label="Housing"
                        />
                        <NavLink
                            index={4}
                            activeIndex={activeIndex}
                            handleNavLinkClick={handleNavLinkClick}
                            label="Solara Terrace"
                        />
                        <NavLink
                            index={5}
                            activeIndex={activeIndex}
                            handleNavLinkClick={handleNavLinkClick}
                            label="Beach &amp; Cove"
                        />
                    </div>

                    <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-4">
                        {children}
                        <div className="text-center pt-2">
                            <p className="text-xs text-slate-400 flex items-center justify-center gap-1">
                                <Phone size={12} /> Concierge: +1 (555) 000-0000
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
