"use client";
import Link from "next/link";
import type { Swiper as SwiperType } from "swiper";
import Logo from "../logo/Logo";
import Sidebar from "../sidebar/Sidebar";

type HeaderTypes = {
    swiper: SwiperType | null;
    activeIndex: number;
};

export default function Header(props: HeaderTypes) {
    const { swiper, activeIndex } = props;

    function toTheTop() {
        swiper?.slideTo(0);
    }

    function handleSetSlide(slide: number) {
        // console.log("active: ", swiper?.activeIndex, " Slide: ", slide);
        if (swiper && swiper.activeIndex !== slide) {
            swiper.slideTo(slide);
        }
    }

    return (
        <header
            className={`
                absolute w-screen flex px-3 m-auto z-20 transition-all duration-700
                sm:justify-center 
                ${
                    activeIndex !== 0
                        ? "bg-white/95 backdrop-blur-md delay-500 duration-1000 py-1.5 shadow-sm"
                        : "bg-transparent delay-500 duration-1000 py-5"
                }
            `}
        >
            <div
                className="
                    flex flex-row w-full justify-between items-center
                    sm:w-11/12
                    "
            >
                <Logo activeIndex={activeIndex} toTheTop={toTheTop} />
                <nav className="hidden sm:flex w-2/4">
                    <ul
                        className="
                            z-10 list-none flex flex-row justify-around items-center
                            text-[.9rem] w-full bg-white/80 px-8 py-2 rounded-full backdrop-blur-sm shadow-sm
                            md:text-[1rem]
                            lg:text-[1.2rem]
                            xl:text-[1.3rem]
                            [&>li]:hover:text-teal-600 [&>li]:tracking-widest [&>li]:transition-colors [&>li]:duration-300
                            "
                    >
                        <li>
                            <button
                                onClick={() => handleSetSlide(1)}
                                className={`${activeIndex === 1 ? "text-teal-600" : ""}`}
                            >
                                Arrival
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleSetSlide(2)}  className={`${activeIndex === 2 ? "text-teal-600" : ""}`}>
                                Lobby
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleSetSlide(3)}  className={`${activeIndex === 3 ? "text-teal-600" : ""}`}>
                                Pools
                            </button>
                        </li>
                        <li>
                            <Link href="/#">About</Link>
                        </li>
                    </ul>
                </nav>
                <Sidebar swiper={swiper} activeIndex={activeIndex} />
            </div>
        </header>
    );
}
