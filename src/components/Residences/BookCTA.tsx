"use client"
import { usePortal } from "@/Context/PortalContext";

export default function BookCTA() {
    const { toggleBookingModal } = usePortal();
    return (
        <button
            onClick={toggleBookingModal}
            className="px-6 py-2 bg-slate-900 text-white rounded-lg font-bold text-sm hover:bg-teal-600 transition-colors shadow-lg shadow-slate-200 flex-1 cursor-pointer"
        >
            Book This Residence
        </button>
    );
}
