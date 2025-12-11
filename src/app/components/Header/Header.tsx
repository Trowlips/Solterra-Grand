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

    function handleSetSlide(slide: number) {
        console.log("active: ", swiper?.activeIndex, " Slide: ", slide);
        if (swiper && swiper.activeIndex !== slide) {
            swiper.slideTo(slide);
        }
    }

    return (
        <header
            className={`
                absolute
                w-screen flex px-3 sm:justify-center m-auto z-20
                transition-all
                ${
                    activeIndex !== 0
                        ? "bg-slate-400 delay-500 duration-1000 py-2"
                        : "bg-transparent delay-500 duration-1000 py-1"
                }
            `}
        >
            <div
                className="
                    flex flex-row w-full justify-between items-center
                    sm:w-11/12
                    "
            >
                <Logo activeIndex={activeIndex} />
                <nav className="hidden sm:flex w-2/4">
                    <ul
                        className="
                            z-10 list-none flex flex-row justify-around items-center
                            text-[.9rem] w-full text-white
                            md:text-[1rem]
                            lg:text-[1.2rem]
                            xl:text-[1.3rem]
                            [&>li]:hover:scale-120 [&>li]:transition-all
                            "
                    >
                        <li>
                            <button onClick={() => handleSetSlide(0)}>
                                Home
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleSetSlide(1)}>
                                Terrace
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleSetSlide(2)}>
                                Residence
                            </button>
                        </li>
                        <li>
                            <Link href="/#">About</Link>
                        </li>
                    </ul>
                </nav>
                <Sidebar swiper={swiper} />
            </div>
        </header>
    );
}
