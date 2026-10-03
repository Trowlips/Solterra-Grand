"use client";

import { forwardRef } from "react";
import { Calendar } from "lucide-react";

interface CustomBookingDateInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onClick?: () => void;
  placeholder?: string;
}

export const CustomBookingDateInput = forwardRef<HTMLInputElement, CustomBookingDateInputProps>(
  ({ value, onClick, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Calendar size={18} className="text-slate-400" />
        </div>

        <input
          {...props}
          ref={ref}
          onClick={onClick}
          value={value}
          className="w-full pl-10 p-3 border border-slate-200 rounded-lg focus:outline-none focus:border-teal-500 bg-white"
          readOnly
        />
      </div>
    );
  },
);

CustomBookingDateInput.displayName = "CustomBookingDateInput";
