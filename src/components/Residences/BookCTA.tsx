"use client";
import { usePortal } from "@/Context/PortalContext";
import { Residence } from "@/services/residence";

type BookCTAPropsType = {
    unit: Residence;
};

export default function BookCTA(props: BookCTAPropsType) {
    const { unit } = props;
    const { toggleBookingModal, setUnit } = usePortal();

    function handleClick() {
        toggleBookingModal();
        setUnit(unit);
    }

    return (
        <button
            onClick={handleClick}
            className="px-6 py-2 bg-slate-900 text-white rounded-lg font-bold text-sm hover:bg-teal-600 transition-colors shadow-lg shadow-slate-200 flex-1 cursor-pointer"
        >
            Book This Residence
        </button>
    );
}
