"use server"
import { auth } from "@/_lib/auth";
import { supabase } from "@/_lib/supabase";
import { revalidatePath, unstable_cache } from "next/cache";

export type Booking = {
    id: string;
    startDate: string;
    numNights: number;
    numGuests: number;
    totalPrice: number;
    status: string;
    memId: number;
    unitId: number;
    residences: {
        name: string;
        category: string;
        thumbnailUrl: string;
    };
};

export const getBookings = async (memberId: number | undefined) => {
    const fetchBookings = unstable_cache(
        async (id) => {
            const { data, error, count } = await supabase
                .from("bookings")
                .select(
                    "id, created_at, startDate, numNights, numGuests, totalPrice, status, memId, unitId, residences(name, category, thumbnailUrl)"
                )
                .eq("memId", id)
                .order("startDate");

            if (error) {
                console.error(error);
                throw new Error("Bookings could not get loaded");
            }

            return data.map((booking) => ({
                ...booking,
                residences: Array.isArray(booking.residences)
                    ? booking.residences[0]
                    : booking.residences,
            }));
        },
        [`bookings-for-${memberId}`], 
        {
            revalidate: 3600, // Optional: Cache for 1 hour
            tags: [`bookings`, `bookings-${memberId}`], 
        }
    );

    return fetchBookings(memberId);
};

export async function deleteBooking(bookingId: number) {
    const session = await auth();
    if (!session) throw new Error("You must be logged in");

    const memBookings = await getBookings(session.user.memberId);
    const memBookingsIds = memBookings.map((booking) => booking.id);

    if (!memBookingsIds.includes(bookingId))
        throw new Error("You are not allowed to delete this booking");

    const { error } = await supabase
        .from("bookings")
        .delete()
        .eq("id", bookingId);

    if (error) {
        console.error(error);
        throw new Error("Booking could not be deleted");
    }
    revalidatePath("/portal/account");
}
