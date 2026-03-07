import ResidenceListSkeleton from "@/components/Residences/ResidenceListSkeleton";

export default function Loading() {
    return (
        <div className="flex flex-col w-full gap-8 py-5">
            {/* Your branding/loading indicator at the top */}
            <div className="flex flex-col items-center animate-pulse pt-4">
                <span className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase">
                    Solterra
                </span>
                <span className="text-[10px] text-teal-600/60 font-medium">
                    Loading Sanctuary...
                </span>
            </div>
            
            {/* The actual Skeleton layout matching your cards */}
            <ResidenceListSkeleton />
        </div>
    );
}
