import Logo from "@/components/Header/Logo";
import Sidebar from "@/components/Header/Sidebar";
import SwiperNavButton from "@/components/Header/SwiperNavButton";
import BookNowButton from "../BookNowButton";
import MemberButton from "../MemberButton";
import HeaderUserButton from "./HeaderUserButton";
import HeaderWrapper from "./HeaderWrapper";

export default function Header() {
    return (
        <HeaderWrapper>
            <div
                className="
                    flex flex-row w-full justify-between items-center
                    sm:w-11/12 md:justify-around md:w-full
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
                <Sidebar
                    MemberButton={<MemberButton />}
                    BookingButton={<BookNowButton />}
                >
                    <HeaderUserButton />
                </Sidebar>
            </div>
        </HeaderWrapper>
    );
}
