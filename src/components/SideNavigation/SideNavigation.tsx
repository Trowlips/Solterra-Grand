"use client";
import { usePortal } from "@/Context/PortalContext";

function SideNavigation({ children }: { children: React.ReactNode }) {
    const { drawerOpen } = usePortal();

    return (
        <aside
            className={`absolute h-full sm:relative transition-[transform_opacity] bg-white duration-500 z-20 ${
                drawerOpen
                    ? "w-2/3 sm:w-[45%]"
                    : "-translate-x-full w-0 opacity-0 border-none"
            }`}
        >
            <div
                className={`
                h-full bg-red-white border-r border-slate-200 flex flex-col z-20 shadow-xl transition-opacity duration-300
                ${drawerOpen ? "opacity-100 delay-100" : "opacity-0"}
            `}
            >
                {children}
            </div>
        </aside>
    );
}

export default SideNavigation;
