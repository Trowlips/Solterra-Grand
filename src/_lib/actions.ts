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

function getEndDate(startDateStr: string, nights: number) {
  const start = new Date(startDateStr);
  const end = new Date(start);
  end.setDate(start.getDate() + nights);
  return end.toISOString().split("T")[0];
}

export async function createBooking(bookingData: BookingDataType, formData: FormData) {
  console.log("Booking Data: ", bookingData);
  console.log("formData: ", formData);

  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const startDate = formData.get("startDate") as string;
  const numNights = Number(formData.get("numNights"));
  const unitId = bookingData.unit?.id;

  if (!unitId) throw new Error("Unit not selected");

  const endDate = getEndDate(startDate, numNights);

  const { data: overlaps, error: overlapError } = await supabase
    .from("bookings")
    .select("id")
    .eq("unitId", unitId)
    .neq("status", "cancelled") // Ignore cancelled bookings
    .lt("startDate", endDate) // Existing start is before our end
    .filter("startDate", "gt", startDate);

  if (overlapError) throw new Error("Could not verify availability");
  if (overlaps && overlaps.length > 0) {
    throw new Error("These dates are already booked. Please choose another date.");
  }

  const newBooking = {
    memId: session.user.memberId,
    startDate,
    numNights,
    numGuests: Number(formData.get("numGuests")),
    extrasPrice: 0,
    totalPrice: bookingData.totalPrice,
    status: "unconfirmed",
    isPaid: false,
    unitId,
  };

  const { error } = await supabase.from("bookings").insert([newBooking]);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be created");
  }

  revalidatePath(`/portal/residences`);
  redirect("/portal/account");
}

export async function getBookedDates(unitId: string) {
  const { data, error } = await supabase
    .from("bookings")
    .select("startDate, numNights")
    .eq("unitId", unitId)
    .neq("status", "cancelled");

  if (error) throw new Error("Failed to fetch booked dates");

  // Transform the bookings into a flat list of date strings (YYYY-MM-DD)
  const blockedDates = data.flatMap((booking) => {
    const dates = [];
    const start = new Date(booking.startDate);
    // console.log(start);
    for (let i = 0; i < booking.numNights; i++) {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      dates.push(`${year}-${month}-${day}`);
    }
    return dates;
  });

  return blockedDates;
}
