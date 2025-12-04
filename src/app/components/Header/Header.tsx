import Link from "next/link";
import Logo from "../logo/Logo";
import Sidebar from "../sidebar/Sidebar";

export default function Header() {
    return (
        <header
            className="
            absolute
            w-screen flex px-3 pt-3 sm:justify-center m-auto
            xl:w-11/12
            "
        >
            <div
                className="
                    flex flex-row w-full justify-between items-center
                    sm:w-11/12
                    "
            >
                <Logo />
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
                            <Link href="/#">Home</Link>
                        </li>
                        <li>
                            <Link href="/#">Residence</Link>
                        </li>
                        <li>
                            <Link href="/#">Terrace</Link>
                        </li>
                        <li>
                            <Link href="/#">About</Link>
                        </li>
                        {/* <li
                            className="border rounded text-center transition-all
                            hover:bg-slate-400 hover:text-white
                            sm:px-1 sm:py-1"
                        >
                            <Link href="/#">Book now!</Link>
                        </li> */}
                    </ul>
                </nav>
                <Sidebar />
            </div>
        </header>
    );
}
