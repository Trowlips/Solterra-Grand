import { Calendar } from "lucide-react";

function page() {
    return (
        <div className="h-full w-full px-10 space-y-8 overflow-y-auto">
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-slate-900">
                        Your Reservations
                    </h3>
                    <button
                        className="text-teal-600 text-sm font-bold hover:underline"
                    >
                        + New Booking
                    </button>
                </div>
                <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                    <Calendar
                        className="mx-auto text-slate-300 mb-3"
                        size={32}
                    />
                    <p className="text-slate-400 mb-4">
                        You have no upcoming stays.
                    </p>
                    <button
                        className="text-teal-600 font-bold text-sm"
                    >
                        Browse Residences
                    </button>
                </div>
            </div>
        </div>
    );
}

export default page;
