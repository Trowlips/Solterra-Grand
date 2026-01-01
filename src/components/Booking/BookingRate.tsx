import { Residence } from "@/services/residence";

type BookingRatePropsType = {
    unit: Residence | null;
    night: number;
    guest: number;
};

export default function BookingRate(props: BookingRatePropsType) {
    const { unit, night, guest } = props;
    if (unit?.type === "villa")
        return (
            <span className="font-bold">
                ${unit?.regularPrice} x {night} Nights
            </span>
        );

    return (
        <span className="font-bold">
            ${unit?.regularPrice} x {night} Nights x {guest}{" "}
            {guest >= 2 ? "Guests" : "Guest"}
        </span>
    );
}
