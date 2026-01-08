import { Booking } from "@/services/booking";
import Image from "next/image";

type ReservationCardType = {
    booking: Booking;
    onDelete: (bookingId: number) => void;
};

function ReservationCard({ booking, onDelete }: ReservationCardType) {

    return (
        <div
            key={booking.id}
            className="flex flex-col sm:flex-row gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-teal-300 transition-colors"
        >
            <div className="relative sm:w-24 sm:h-24 bg-slate-200 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                    src={booking.residences.thumbnailUrl}
                    fill
                    className="w-full h-full object-cover"
                    alt="Room"
                />
            </div>

            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <div>
                        <h4 className="font-bold text-slate-900">
                            {booking.residences.category}
                        </h4>
                        <p className="text-xs text-slate-500 uppercase tracking-wide">
                            {booking.startDate} • {booking.numNights} Nights
                        </p>
                    </div>
                    <span className="bg-teal-100 text-teal-800 text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                        {booking.status}
                    </span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                        {booking.numGuests} Guests
                    </span>
                    <button
                        onClick={() => onDelete(Number(booking.id))}
                        className="text-xs text-red-400 hover:text-red-600 font-bold cursor-pointer"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ReservationCard;
