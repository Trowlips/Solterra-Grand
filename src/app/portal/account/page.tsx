import MemberTierCard from "@/components/Account/MemberTierCard";
import ReservationList from "@/components/Account/ReservationList";

function page() {
    return (
        <div className="h-full w-full px-10 space-y-8 overflow-y-auto">
            <ReservationList />
            <MemberTierCard />
        </div>
    );
}

export default page;
