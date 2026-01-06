import { Booking } from "@/services/booking";
import { Calendar } from "lucide-react";
import Link from "next/link";
import ReservationList from "./ReservationList";

type ReservationBoxType = {
    bookings: Booking[];
};

function ReservationBox({ bookings }: ReservationBoxType) {
    return (
        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-900">
                    Your Reservations
                </h3>
                <Link
                    href={"/portal/residences"}
                    className="text-teal-600 text-sm font-bold hover:underline"
                >
                    + New Booking
                </Link>
            </div>
            {bookings.length === 0 ? (
                <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                    <Calendar
                        className="mx-auto text-slate-300 mb-3"
                        size={32}
                    />
                    <p className="text-slate-400 mb-4">
                        You have no upcoming stays.
                    </p>
                    <Link
                        href={"/portal/residences"}
                        className="text-teal-600 font-bold text-sm"
                    >
                        Browse Residences
                    </Link>
                </div>
            ) : (
                <ReservationList bookings={bookings} />
            )}
        </div>
    );
}

export default ReservationBox;
