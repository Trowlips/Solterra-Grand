import Logo from "@/components/Header/Logo";
import Sidebar from "@/components/Header/Sidebar";
import SwiperNavButton from "@/components/Header/SwiperNavButton";
import { Calendar } from "lucide-react";
import UserButton from "../UserButton";

export default function Header() {
    return (
        <header
            className={`
                absolute top-0 w-screen flex px-3 m-auto z-50 transition-all duration-700 
                sm:justify-center 
                ${
                    true
                        ? "bg-white/95 delay-500 duration-1000 py-1.5 shadow-sm"
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
                {/* <Logo activeIndex={1} toTheTop={toTheTop} /> */}
                <Logo />
                <nav className="hidden sm:flex w-2/4">
                    <ul
                        className="
                            z-10 list-none flex flex-row justify-around items-center
                            text-[.9rem] w-full bg-white/80 px-8 py-2 rounded-full backdrop-blur-sm shadow-sm
                            md:px-3
                            lg:text-[1.2rem]
                            xl:text-[1.3rem]
                            [&>li]:hover:text-teal-600 [&>li]:tracking-widest [&>li]:transition-colors [&>li]:duration-300
                            "
                    >
                        <li>
                            <SwiperNavButton index={1}>Arrival</SwiperNavButton>
                        </li>
                        <li>
                            <SwiperNavButton index={2}>Lobby</SwiperNavButton>
                        </li>
                        <li>
                            <SwiperNavButton index={3}>Housing</SwiperNavButton>
                        </li>
                        <li>
                            <SwiperNavButton index={4}>Pools</SwiperNavButton>
                        </li>
                        <li>
                            <SwiperNavButton index={5}>Sea</SwiperNavButton>
                        </li>
                    </ul>
                </nav>
                <Sidebar>
                    <UserButton />
                    <button className="flex items-center justify-center gap-2 w-full py-3 bg-teal-600 text-white font-bold text-sm tracking-wide rounded-lg hover:bg-teal-700 shadow-md transition-transform active:scale-95">
                        <Calendar size={18} />
                        BOOK YOUR STAY
                    </button>
                </Sidebar>
            </div>
        </header>
    );
}
