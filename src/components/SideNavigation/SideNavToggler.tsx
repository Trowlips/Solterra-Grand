"use client";

import { usePortal } from "@/Context/PortalContext";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

function SideNavToggler() {
    const { drawerOpen, toggleDrawer } = usePortal();

    return (
        <div
            className={`absolute flex z-30 transition-all duration-500 ${
                drawerOpen ? "top-3 left-1/5" : "top-3 left-3"
            }`}
        >
            {drawerOpen ? (
                <button onClick={toggleDrawer}>
                    <ChevronsLeft
                        size={35}
                        className="text-black/30 hover:text-black/50 transition-colors duration-300 ease-in cursor-pointer"
                    />
                </button>
            ) : (
                <button onClick={toggleDrawer}>
                    <ChevronsRight
                        size={35}
                        className="text-black/30 hover:text-black/50 transition-colors duration-300 ease-in cursor-pointer"
                    />
                </button>
            )}
        </div>
    );
}

export default SideNavToggler;
