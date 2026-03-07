export default function Loading() {
    return (
        <div className="flex flex-col w-full gap-8 py-5">
            {/* Top Loading Indicator (Matches your Residences loader) */}
            <div className="flex flex-col items-center animate-pulse pt-4">
                <span className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase">Solterra</span>
                <span className="text-[10px] text-teal-600/60 font-medium">Loading Updates...</span>
            </div>

            {/* News Skeleton Layout */}
            <div className="h-full w-full px-10 animate-pulse">
                <div className="grid gap-8">
                    {/* Hero Banner Skeleton */}
                    <div className="relative rounded-2xl overflow-hidden h-60 sm:h-96 bg-slate-200 shadow-xl">
                        {/* Fake Text inside the banner */}
                        <div className="absolute bottom-0 left-0 p-8 w-full space-y-3">
                            <div className="h-5 w-24 bg-slate-300 rounded-full mb-3"></div>
                            <div className="h-8 w-3/4 sm:w-1/2 bg-slate-300 rounded"></div>
                            <div className="h-4 w-full sm:w-2/3 bg-slate-300 rounded"></div>
                            <div className="h-4 w-5/6 sm:w-1/2 bg-slate-300 rounded"></div>
                        </div>
                    </div>

                    {/* News Cards Skeleton */}
                    <div className="flex flex-col sm:flex-row gap-5">
                        {[1, 2, 3].map((n) => (
                            <div
                                key={n}
                                className="flex-1 bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm"
                            >
                                {/* Card Image Area */}
                                <div className="h-48 bg-slate-200 relative">
                                    {/* Fake Tag Badge */}
                                    <div className="absolute top-4 left-4 h-6 w-16 bg-white/50 rounded"></div>
                                </div>

                                {/* Card Content Area */}
                                <div className="p-6 space-y-4">
                                    {/* Date */}
                                    <div className="h-3 w-20 bg-slate-200 rounded"></div>
                                    {/* Title */}
                                    <div className="h-6 w-full bg-slate-200 rounded"></div>
                                    {/* Description Lines */}
                                    <div className="space-y-2 pt-2">
                                        <div className="h-3 w-full bg-slate-200 rounded"></div>
                                        <div className="h-3 w-full bg-slate-200 rounded"></div>
                                        <div className="h-3 w-2/3 bg-slate-200 rounded"></div>
                                    </div>
                                    {/* Read More button */}
                                    <div className="h-4 w-24 bg-slate-200 rounded mt-4"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
