"use client"
import { Check, LayoutGrid, User } from "lucide-react";

const rooms = [
    {
        id: "Coastal Cabin",
        type: "Intimate",
        price: "$450",
        sqft: "850 sq ft",
        guests: "2 Adults",
        desc: "Rustically elegant hideaways tucked into the cliffside greenery. Perfect for couples.",
        features: [
            "Private Trekking Path",
            "Open-air Rain Shower",
            "Forest & Sea Views",
        ],
        img: "https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?ixlib=rb-4.0.3&w=1000",
    },
    {
        id: "Horizon House",
        type: "Family",
        price: "$850",
        sqft: "2,200 sq ft",
        guests: "4-6 Guests",
        desc: "Spacious estates with expansive wrap-around decks. Designed for long-term stays.",
        features: [
            "Full Chef's Kitchen",
            "Private Media Room",
            "Wrap-around Deck",
        ],
        img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&w=1000",
    },
    {
        id: "Grand Villa",
        type: "Signature",
        price: "$2,200",
        sqft: "3,500 sq ft",
        guests: "4 Adults",
        desc: "Our most secluded offering. Detached two-story sanctuaries reached only by private gate.",
        features: [
            "Infinity Plunge Pool",
            "One-Way Privacy Glass",
            "Private Butler",
        ],
        img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&w=1000",
        isPremium: true,
    },
];

function page() {
    return (
        <div className="h-full w-full px-10 space-y-8">
            {rooms.map((room) => (
                <div
                    key={room.id}
                    className={`bg-white rounded-2xl overflow-hidden border ${
                        room.isPremium
                            ? "border-teal-200 ring-4 ring-teal-50"
                            : "border-slate-100"
                    } shadow-sm flex flex-col md:flex-row`}
                >
                    <div className="md:w-2/5 relative h-64 md:h-auto">
                        <img
                            src={room.img}
                            alt={room.id}
                            className="w-full h-full object-cover"
                        />
                        {room.isPremium && (
                            <div className="absolute top-4 left-4 bg-slate-900 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                                Signature Collection
                            </div>
                        )}
                    </div>
                    <div className="md:w-3/5 p-8 flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-teal-600 text-xs font-bold uppercase tracking-wider mb-1">
                                        {room.type} Living
                                    </p>
                                    <h3 className="text-2xl font-serif font-bold text-slate-900">
                                        {room.id}
                                    </h3>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-slate-900">
                                        {room.price}
                                    </p>
                                    <p className="text-xs text-slate-400">
                                        per night
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 mb-6 text-sm text-slate-500">
                                <span className="flex items-center gap-1">
                                    <LayoutGrid size={16} /> {room.sqft}
                                </span>
                                <span className="flex items-center gap-1">
                                    <User size={16} /> {room.guests}
                                </span>
                            </div>

                            <p className="text-slate-600 mb-6">{room.desc}</p>

                            <div className="grid grid-cols-2 gap-y-2 mb-8">
                                {room.features.map((feat) => (
                                    <div
                                        key={feat}
                                        className="flex items-center gap-2 text-sm text-slate-500"
                                    >
                                        <Check
                                            size={14}
                                            className="text-teal-500"
                                        />{" "}
                                        {feat}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4 pt-6 border-t border-slate-100">
                            <button className="px-6 py-2 border border-slate-300 rounded-lg text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors">
                                View Details
                            </button>
                            <button
                                onClick={() => console.log(room.id)}
                                className="px-6 py-2 bg-slate-900 text-white rounded-lg font-bold text-sm hover:bg-teal-600 transition-colors shadow-lg shadow-slate-200 flex-1"
                            >
                                Book This Residence
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default page;
