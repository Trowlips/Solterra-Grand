"use client";

import { Booking, deleteBooking } from "@/services/booking";
import ReservationCard from "./ReservationCard";
import { startTransition, useOptimistic } from "react";

type ReservationListType = {
    bookings: Booking[];
};

function ReservationList({ bookings }: ReservationListType) {
    const [optimisticBookings, optimisticDelete] = useOptimistic(
        bookings,
        (curBookings, bookingId) => {
            return curBookings.filter((booking) => booking.id !== bookingId);
        }
    );

    async function handleDelete(bookingId: number) {
        startTransition(async () => {
            optimisticDelete(bookingId);
            await new Promise((res) => setTimeout(res, 2000));
            await deleteBooking(bookingId);
        });
    }

    return (
        <ul className="space-y-4">
            {optimisticBookings.map((booking) => (
                <ReservationCard
                    booking={booking}
                    onDelete={handleDelete}
                    key={booking.id}
                />
            ))}
        </ul>
    );
}

export default ReservationList;
