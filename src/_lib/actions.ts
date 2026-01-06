"use server";
import { Residence } from "@/services/residence";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function signInAction() {
    await signIn("google", {
        redirectTo: "/portal/news",
    });
}

export async function signOutAction() {
    await signOut({
        redirectTo: "/",
    });
}

type BookingDataType = {
    totalPrice: number | null;
    unit: Residence | null;
};

export async function createBooking(
    bookingData: BookingDataType,
    formData: FormData
) {
    console.log("Booking Data: ", bookingData);
    console.log("formData: ", formData);

    const session = await auth();
    if (!session) throw new Error("You must be logged in");

    const newBooking = {
        memId: session.user.memberId,
        startDate: formData.get("startDate"),
        numNights: Number(formData.get("numNights")),
        numGuests: Number(formData.get("numGuests")),
        extrasPrice: 0,
        totalPrice: bookingData.totalPrice,
        status: "unconfirmed",
        isPaid: false,
        unitId: bookingData.unit?.id,
    };

    const { error } = await supabase.from("bookings").insert([newBooking]);

    if (error) {
        console.error(error);
        throw new Error("Booking could not be created");
    }

    revalidatePath(`/portal/residences`);
    redirect("/portal/account");
}
