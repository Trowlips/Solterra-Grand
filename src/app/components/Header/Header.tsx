import Link from "next/link";
import Logo from "../Logo/Logo";

export default function Header() {
    return (
        <header className="flex justify-between bg-transparent">
            <Logo />
            <nav className="flex justify-end lg:min-w-full grow-1">
                <ul className="list-none flex flex-row justify-around gap-5">
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
