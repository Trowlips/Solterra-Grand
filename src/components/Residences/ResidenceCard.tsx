import { Residence } from "@/services/residence";
import {
    Check,
    Home,
    ImageIcon,
    LayoutGrid,
    Lock,
    User,
    Wind,
} from "lucide-react";
import Image from "next/image";
import BookCTA from "./BookCTA";

type ResidenceCardPropsType = {
    unit: Residence;
};

function ResidenceCard(props: ResidenceCardPropsType) {
    const { unit } = props;
    const { minCapacity, maxCapacity } = unit;
    // console.log(unit);

    const isSignature = unit.type === "villa";
    const getCapacityLabel = (minCapacity: number, maxCapacity: number) =>
        minCapacity === maxCapacity
            ? `${maxCapacity} Guests`
            : `${minCapacity}-${maxCapacity} Guests`;
    const getIcon = (type: string) => {
        if (type === "cabin") return <Wind size={18} />;
        if (type === "house") return <Home size={18} />;
        return <Lock size={18} />;
    };
    const finalPrice = unit.regularPrice - (unit.discount || 0);

    return (
        <div
            key={unit.id}
            className={`bg-white rounded-2xl overflow-hidden border ${
                isSignature
                    ? "border-teal-200 ring-4 ring-teal-50"
                    : "border-slate-100"
            } shadow-sm flex flex-col md:flex-row`}
        >
            <div className="md:w-2/5 relative h-64 md:h-auto group">
                <Image
                    src={unit.thumbnailUrl}
                    alt={unit.name}
                    fill
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                />
                {isSignature && (
                    <div className="absolute top-4 left-4 bg-slate-900 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                        Signature Collection
                    </div>
                )}
                {/* Gallery Hint */}
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur px-2 py-1 rounded text-white text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ImageIcon size={12} /> View Gallery
                </div>
            </div>

            <div className="md:w-3/5 p-8 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-teal-600 text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                                {getIcon(unit.type)} {unit.category}
                            </p>
                            <h3 className="text-2xl font-serif font-bold text-slate-900">
                                {unit.category}
                            </h3>
                        </div>
                        <div className="text-right">
                            {unit.discount > 0 && (
                                <p className="text-xs text-slate-400 line-through">
                                    ${unit.regularPrice}
                                </p>
                            )}
                            <p className="text-2xl font-bold text-slate-900">
                                ${finalPrice}
                            </p>
                            <p className="text-xs text-slate-400">
                                per night {unit.type !== "villa" && "& person"}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 mb-6 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                            <LayoutGrid size={16} /> {unit.areaSqFt} sq ft
                        </span>
                        <span className="flex items-center gap-1">
                            <User size={16} />{" "}
                            {getCapacityLabel(minCapacity, maxCapacity)}
                        </span>
                    </div>
                    <p className="text-sm text-slate-600 mb-6">
                        {unit.description}
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-y-2 mb-8">
                    {unit.features.map((feat) => (
                        <div
                            key={feat}
                            className="flex flex-row justify-start items-center gap-3 text-sm text-slate-500"
                        >
                            <Check className="text-teal-500 h-3 w-3 shrink-0" />
                            <span className="text-xs">{feat}</span>
                        </div>
                    ))}
                </div>
                <div className="flex gap-4 pt-6 border-t border-slate-100">
                    <button className="px-6 py-2 border border-slate-300 rounded-lg text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors">
                        View Details
                    </button>
                    <BookCTA />
                </div>
            </div>
        </div>
    );
}

export default ResidenceCard;
