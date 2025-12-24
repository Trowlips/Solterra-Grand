"use client";

import { usePortal } from "@/Context/PortalContext";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

function SideNavToggler() {
    const { drawerOpen, toggleDrawer } = usePortal();

    return (
        <div
            className={`absolute flex z-30 rounded-2xl transition-all duration-500 ${
                drawerOpen
                    ? "top-5 left-[calc(1/2*100%+1rem)] sm:left-1/4"
                    : "top-5 left-6 bg-gray-400/20 hover:bg-gray-400/40"
            }`}
        >
            {drawerOpen ? (
                <button onClick={toggleDrawer}>
                    <ChevronsLeft className="h-8 w-8 sm:h-9 sm:w-9 text-black/30 hover:text-black/50 transition-colors duration-300 ease-in cursor-pointer" />
                </button>
            ) : (
                <button onClick={toggleDrawer}>
                    <ChevronsRight className="h-8 w-8 sm:h-9 sm:w-9 text-black/30 hover:text-white/50 transition-colors duration-300 ease-in cursor-pointer" />
                </button>
            )}
        </div>
    );
}

export default SideNavToggler;
