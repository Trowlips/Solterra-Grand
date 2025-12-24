import { Calendar } from "lucide-react";
import React from "react";

export default function BookNowButton() {
    return (
        <button className="flex items-center justify-center gap-2 w-full py-3 bg-teal-600 text-white font-bold text-sm tracking-wide rounded-lg hover:bg-teal-700 shadow-md transition-transform active:scale-95">
            <Calendar size={18} />
            BOOK YOUR STAY
        </button>
    );
}
