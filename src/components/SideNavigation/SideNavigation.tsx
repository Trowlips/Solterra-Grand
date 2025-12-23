"use client";
import Icon from "@/app/icon.png";
import { usePortal } from "@/Context/PortalContext";
import { LayoutGrid, Newspaper, User, Waves } from "lucide-react";
import Image from "next/image";
import SideNavLink from "./SideNavLink";
import SideNavToggler from "./SideNavToggler";

const navLinks = [
    {
        to: "/portal/news",
        label: "Resort News",
        Icon: <Newspaper size={20} />,
    },
    {
        to: "/portal/residences",
        label: "Residences",
        Icon: <LayoutGrid size={20} />,
    },
    {
        to: "/portal/account",
        label: "My Account",
        Icon: <User size={20} />,
    },
];

function SideNavigation({ children }: { children: React.ReactNode }) {
    const { drawerOpen } = usePortal();

    return (
        <aside
            className={`relative transition-[transform_opacity] duration-500 ${
                drawerOpen
                    ? "w-1/3"
                    : "-translate-x-full w-0 opacity-0 border-none"
            }`}
        >
            <div
                className={`
                h-full bg-red-white border-r border-slate-200 flex flex-col z-20 shadow-xl transition-opacity duration-300
                ${drawerOpen ? "opacity-100 delay-100" : "opacity-0"}
            `}
            >
                <div className="px-8 py-4">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-13 w-13 rounded-full overflow-hidden border-2 border-teal-600 shadow-sm">
                            <Image
                                src={Icon}
                                alt="Solterra Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h1 className="font-serif font-bold text-slate-900 leading-none tracking-wide">
                                SOLTERRA
                            </h1>
                            <span className="text-xs text-teal-600 font-bold tracking-[0.2em]">
                                MEMBERS
                            </span>
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-xl p-4 text-white mb-6 relative overflow-hidden">
                        <div className="relative z-10">
                            <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                                Welcome back
                            </p>
                            <p className="font-serif text-lg">Guest</p>
                        </div>
                        <Waves className="absolute -bottom-4 -right-4 text-white/10 w-24 h-24" />
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-2">
                    {navLinks.map((nav) => (
                        <SideNavLink
                            key={nav.label}
                            to={nav.to}
                            label={nav.label}
                            Icon={nav.Icon}
                        />
                    ))}
                </nav>

                {/* TODO: put this in a different component */}
                <div className="p-4 border-t border-slate-100">{children}</div>
            </div>
        </aside>
    );
}

export default SideNavigation;
