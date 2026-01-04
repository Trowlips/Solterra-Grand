"use client";

import { usePortal } from "@/Context/PortalContext";
import capitalize from "@/helper/capitalize";
import { X } from "lucide-react";
import React, { useState } from "react";
import BookingRate from "./BookingRate";
import BookingButton from "./BookingButton";
import { createBooking } from "@/_lib/actions";

export default function BookingModal() {
    const { bookingModalOpen, toggleBookingModal, unit } = usePortal();
    const [numNights, setNumNights] = useState<number>(1);
    const [numGuest, setNumGuests] = useState<number>(1);

    const totalPrice = unit && unit?.regularPrice * numNights * numGuest;

    function handlePropagation(e: React.MouseEvent<HTMLDivElement>) {
        e.stopPropagation();
    }

    function handleCloseModal(
        e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
    ) {
        e.stopPropagation();
        toggleBookingModal();

        setTimeout(() => {
            setNumNights(1);
            setNumGuests(1);
        }, 500);
    }

    const bookingData = {
        totalPrice,
        unit,
    };

    const createBookingWithData = createBooking.bind(null, bookingData);

    return (
        <div
            onClick={handleCloseModal}
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
                    <button
                        className="cursor-pointer"
                        onClick={handleCloseModal}
                    >
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

                    <form action={createBookingWithData}>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">
                                    Check-in Date
                                </label>
                                <input
                                    name="startDate"
                                    type="date"
                                    required
                                    onChange={(e) =>
                                        console.log(e.target.value)
                                    }
                                    className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:border-teal-500"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">
                                    Duration (Nights)
                                </label>
                                <select
                                    name="numNights"
                                    value={numNights}
                                    onChange={(e) =>
                                        setNumNights(Number(e.target.value))
                                    }
                                    className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:border-teal-500"
                                >
                                    {[1, 2, 3, 4, 5, 7, 10, 14].map((n) => (
                                        <option key={n} value={n}>
                                            {n} Nights
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {unit?.type !== "villa" && (
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">
                                        Guests
                                    </label>
                                    <select
                                        name="numGuests"
                                        value={numGuest}
                                        onChange={(e) =>
                                            setNumGuests(Number(e.target.value))
                                        }
                                        className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:border-teal-500"
                                    >
                                        {Array.from(
                                            { length: unit?.maxCapacity || 1 },
                                            (_, i) => i + 1
                                        ).map((x) => (
                                            <option value={x} key={x}>
                                                {x}{" "}
                                                {x === 1 ? "guest" : "guests"}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mt-6">
                            <div className="flex justify-between mb-2">
                                <span className="text-slate-600">Unit</span>
                                <span className="font-bold">
                                    {unit?.category} ({capitalize(unit?.type)})
                                </span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span className="text-slate-600">Rate</span>
                                <BookingRate
                                    unit={unit}
                                    night={numNights}
                                    guest={numGuest}
                                />
                            </div>

                            <div className="border-t border-slate-200 my-2 pt-2 flex justify-between">
                                <span className="font-bold text-lg">
                                    Total Due
                                </span>
                                <span className="font-bold text-lg text-teal-600">
                                    ${totalPrice}
                                </span>
                            </div>
                        </div>

                        <BookingButton />
                    </form>
                </div>
            </div>
        </div>
    );
}
