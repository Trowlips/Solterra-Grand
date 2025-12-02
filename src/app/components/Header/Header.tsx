import Link from "next/link";
import Logo from "../Logo/Logo";
import { Bars3BottomLeftIcon } from "@heroicons/react/16/solid";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Header() {
    return (
        <header className="flex px-3 py-3 ss:px-5 ss:py-5 justify-between items-center bg-transparent">
            <Logo />
            <Bars3Icon className="h-5 w-5 sm:hidden"/>
            <nav className="hidden sm:flex lg:min-w-full">
                <ul className="list-none flex flex-row justify-around gap-5 bg-red-300">
                    <li>
                        <Link href="/#">Home</Link>
                    </li>
                    <li>
                        <Link href="/#">Residence</Link>
                    </li>
                    <li>
                        <Link href="/#">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
