"use client";

import { Residence } from "@/services/residence";
import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
} from "react";

type PortalContextType = {
    drawerOpen: boolean;
    bookingModalOpen: boolean;
    unit: Residence | null;
    setUnit: Dispatch<SetStateAction<Residence | null>>;
    toggleDrawer: () => void;
    toggleBookingModal: () => void;
};

const PortalContext = createContext<PortalContextType | null>(null);

function PortalProvider({ children }: { children: React.ReactNode }) {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(true);
    const [bookingModalOpen, setBookingModelOpen] = useState(false);
    const [unit, setUnit] = useState<Residence | null>(null);

    const toggleDrawer = () => setDrawerOpen((prev) => !prev);
    const toggleBookingModal = () => setBookingModelOpen((prev) => !prev);

    return (
        <PortalContext.Provider
            value={{
                drawerOpen,
                bookingModalOpen,
                unit,
                setUnit,
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
