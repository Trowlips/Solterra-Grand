import { supabase } from "@/_lib/supabase";

export type Booking = {
    id: string;
    startDate: string;
    numNights: number;
    numGuests: number;
    totalPrice: number;
    status:string;
    memId: number;
    unitId: number;
    residences: {
        name: string;
        category: string;
        thumbnailUrl: string;
    };
};

export async function getBookings(memId: number | undefined) {
    if (!memId) return [];
    const { data, error, count } = await supabase
        .from("bookings")
        .select(
            "id, created_at, startDate, numNights, numGuests, totalPrice, status, memId, unitId, residences(name, category, thumbnailUrl)"
        )
        .eq("memId", memId)
        .order("startDate");

    if (error) {
        console.error(error);
        throw new Error("Bookings could not get loaded");
    }

    const flattenedData = data.map((booking) => ({
        ...booking,
        residences: Array.isArray(booking.residences) 
            ? booking.residences[0] 
            : booking.residences
    }));

    return flattenedData;
}
