import Link from "next/link";
import Logo from "../Logo/Logo";

export default function Header() {
    return (
        <header className="flex px-3 py-3 ss:px-5 ss:py-5 justify-between items-center bg-transparent">
            <Logo />
            <span className="sm:hidden">+</span>
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
