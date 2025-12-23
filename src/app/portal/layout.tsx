import SideNavigation from "@/components/SideNavigation/SideNavigation";
import React from "react";

import SignOutButton from "@/components/SignOutButton";
import { PortalProvider } from "@/Context/PortalContext";
import SideNavToggler from "@/components/SideNavigation/SideNavToggler";
import PortalHeader from "@/components/Portal/PortalHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <PortalProvider>
            <div className="relative flex flex-row h-dvh w-screen bg-slate-50 overflow-hidden">
                <SideNavToggler />
                <SideNavigation>
                    <SignOutButton />
                </SideNavigation>
                <main className="overflow-y-auto">
                    <PortalHeader />
                    {children}
                </main>
            </div>
        </PortalProvider>
    );
}
