import React from "react";
import SpinnerMini from "../SpinnerMini";
import { useFormStatus } from "react-dom";

function BookingButton() {
    const { pending } = useFormStatus();
    return (
        <div className="flex gap-4 mt-6">
            <button className="flex-2 bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700">
                {pending ? <SpinnerMini /> : "Confirm Reservation"}
            </button>
        </div>
    );
}

export default BookingButton;
