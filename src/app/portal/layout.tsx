import SideNavigation from "@/components/SideNavigation/SideNavigation";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen bg-slate-50 overflow-hidden">
            <SideNavigation />
            <div>{children}</div>
        </div>
    );
}
