import { auth } from "@/_lib/auth";
import MemberTierCard from "@/components/Account/MemberTierCard";
import ReservationBox from "@/components/Reservation/ReservationBox";
import { getBookings } from "@/services/booking";

async function page() {
    const session = await auth();
    const bookings = await getBookings(session?.user.memberId);

    console.log("bookings: ", bookings);

    return (
        <div className="h-full w-full px-10 space-y-8 overflow-y-auto">
            <ReservationBox bookings={bookings} />
            <MemberTierCard />
        </div>
    );
}

export default page;
