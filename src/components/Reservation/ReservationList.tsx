import { Booking } from "@/services/booking";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReservationCard from "./ReservationCard";

type ReservationListType = {
    bookings: Booking[];
};

function ReservationList({ bookings }: ReservationListType) {
    return (
        <ul className="space-y-4">
            {bookings.map((booking) => (
                <ReservationCard booking={booking} key={booking.id} />
            ))}
        </ul>
    );
}

export default ReservationList;
