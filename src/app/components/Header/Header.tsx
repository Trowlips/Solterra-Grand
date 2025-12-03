import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Logo from "../logo/Logo";

export default function Header() {
    // console.log();

    return (
        <header
            className="
            w-screen flex px-3 pt-3 sm:justify-center"
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
                            list-none flex flex-row justify-around items-center
                            text-[.9rem] w-full
                            "
                    >
                        <li>
                            <Link href="/#">Home</Link>
                        </li>
                        <li>
                            <Link href="/#">Residence</Link>
                        </li>
                        <li>
                            <Link href="/#">About</Link>
                        </li>
                        <li
                            className="border rounded text-center transition-all
                            hover:bg-slate-400 hover:text-white
                            sm:px-1 sm:py-1"
                        >
                            <Link href="/#">Book now!</Link>
                        </li>
                    </ul>
                </nav>
                <Bars3Icon
                    className="
                        h-5 w-5 cursor-pointer rounded-full transition-opacity duration-500
                        ss:h-8 ss:w-8
                        hover:opacity-50
                    "
                />
            </div>
        </header>
    );
}
