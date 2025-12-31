"use client";

import React, { createContext, useContext, useState } from "react";

type PortalContextType = {
    drawerOpen: boolean;
    bookingModalOpen: boolean;
    toggleDrawer: () => void;
    toggleBookingModal: () => void;
};

const PortalContext = createContext<PortalContextType | null>(null);

function PortalProvider({ children }: { children: React.ReactNode }) {
    const [drawerOpen, setDrawerOpen] = useState(true);
    const [bookingModalOpen, setBookingModelOpen] = useState(false);
    const toggleDrawer = () => setDrawerOpen((prev) => !prev);
    const toggleBookingModal = () => setBookingModelOpen((prev) => !prev);

    return (
        <PortalContext.Provider
            value={{
                drawerOpen,
                bookingModalOpen,
                toggleDrawer,
                toggleBookingModal,
            }}
        >
            {children}
        </PortalContext.Provider>
    );
}

function usePortal() {
    const context = useContext(PortalContext);

    if (context === null) throw new Error("Context was used outside provider");

    return context;
}

export { PortalProvider, usePortal };
