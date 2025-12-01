import Logo from "../Logo/Logo";

export default function Header() {
    return (
        <header className="flex justify-between bg-transparent">
            <Logo />
            <nav className="flex justify-end lg:min-w-full grow-1">
                <ul className="list-none flex flex-row justify-around gap-5">
                    <li>Home</li>
                    <li>Residence</li>
                    <li>About</li>
                </ul>
            </nav>
        </header>
    );
}
