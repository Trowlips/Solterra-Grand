"use client";

import { usePortal } from "@/Context/PortalContext";
import { X } from "lucide-react";
import React, { useContext } from "react";

export default function BookingModal() {
    const { bookingModalOpen, toggleBookingModal } = usePortal();

    function handlePropagation(e: React.MouseEvent<HTMLDivElement>) {
        e.stopPropagation();
    }

    return (
        <div
            onClick={toggleBookingModal}
            className={`absolute h-dvh w-full flex justify-center items-center z-50 bg-black/70 backdrop-blur-sm transition-all duration-500 ${
                bookingModalOpen
                    ? "opacity-100"
                    : "z-0 opacity-0 pointer-events-none"
            }`}
        >
            <div
                onClick={handlePropagation}
                className="rounded-2xl w-2/3 relative z-10 overflow-hidden shadow-2xl flex flex-col"
            >
                <div className="bg-slate-900 text-white p-6 flex justify-between items-center">
                    <h3 className="font-serif text-xl">Reserve Your Stay</h3>
                    <button onClick={toggleBookingModal}>
                        <X
                            size={20}
                            className="text-slate-400 hover:text-white"
                        />
                    </button>
                </div>

                <div className="p-8 overflow-y-auto bg-white">
                    <h4 className="font-bold text-slate-800 text-lg">
                        Trip Details
                    </h4>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">
                                Check-in Date
                            </label>
                            <input
                                type="date"
                                onChange={(e) => console.log(typeof e.target.value)}
                                className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:border-teal-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
