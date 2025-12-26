import SideNavigation from "@/components/SideNavigation/SideNavigation";
import React from "react";

import PortalHeader from "@/components/Portal/PortalHeader";
import SideNavToggler from "@/components/SideNavigation/SideNavToggler";
import SignOutButton from "@/components/SignOutButton";
import { PortalProvider } from "@/Context/PortalContext";

import SideNavLink from "@/components/SideNavigation/SideNavLink";
import SideNavLogo from "@/components/SideNavigation/SideNavLogo";
import WelcomeBack from "@/components/SideNavigation/WelcomeBack";
import { LayoutGrid, Newspaper, User } from "lucide-react";

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

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <PortalProvider>
            <div className="relative flex flex-row h-dvh w-screen bg-slate-50 overflow-hidden">
                <SideNavToggler />
                <SideNavigation>
                    <div className="px-4 pt-8">
                        <SideNavLogo />
                        <WelcomeBack />
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

                    <div className="p-4 border-t border-slate-100">
                        <SignOutButton />
                    </div>
                </SideNavigation>
                <main className="overflow-y-auto w-full">
                    <PortalHeader />
                    {children}
                </main>
            </div>
        </PortalProvider>
    );
}
