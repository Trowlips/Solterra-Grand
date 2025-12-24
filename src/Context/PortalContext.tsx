"use client";

import React, { createContext, useContext, useState } from "react";

type PortalContextType = {
    drawerOpen: boolean;
    toggleDrawer: () => void;
};

const PortalContext = createContext<PortalContextType | null>(null);

function PortalProvider({ children }: { children: React.ReactNode }) {
    const [drawerOpen, setDrawerOpen] = useState(true);
    const toggleDrawer = () => setDrawerOpen((prev) => !prev);
    return (
        <PortalContext.Provider
            value={{
                drawerOpen,
                toggleDrawer,
            }}
        >
            {children}
        </PortalContext.Provider>
    );
}

function usePortal() {
    const context = useContext(PortalContext);

    if (context === null)
        throw new Error("Context was used outside provider");

    return context;
}

export { PortalProvider, usePortal };
