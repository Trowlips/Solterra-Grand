import React from 'react';

export default function ResidenceListSkeleton() {
    return (
        <div className="h-fit w-full px-10 space-y-8 animate-pulse">
            {/* Render 3 ghost cards to fill the screen */}
            {[1, 2, 3].map((n) => (
                <div
                    key={n}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm flex flex-col md:flex-row h-auto min-h-[400px]"
                >
                    {/* Image Area Skeleton */}
                    <div className="md:w-2/5 relative h-64 md:h-auto bg-slate-200">
                        {/* Fake Signature Badge */}
                        <div className="absolute top-4 left-4 h-6 w-32 bg-slate-300 rounded-full"></div>
                    </div>

                    {/* Content Area Skeleton */}
                    <div className="md:w-3/5 p-8 flex flex-col justify-between">
                        <div>
                            {/* Header: Category, Name, Price */}
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <div className="h-3 w-24 bg-slate-200 rounded mb-2"></div>
                                    <div className="h-8 w-48 bg-slate-200 rounded"></div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <div className="h-8 w-24 bg-slate-200 rounded mb-1"></div>
                                    <div className="h-3 w-16 bg-slate-200 rounded"></div>
                                </div>
                            </div>

                            {/* Middle: SqFt and Capacity */}
                            <div className="flex gap-4 mb-6">
                                <div className="h-4 w-20 bg-slate-200 rounded"></div>
                                <div className="h-4 w-24 bg-slate-200 rounded"></div>
                            </div>

                            {/* Description lines */}
                            <div className="space-y-2 mb-6">
                                <div className="h-4 w-full bg-slate-200 rounded"></div>
                                <div className="h-4 w-5/6 bg-slate-200 rounded"></div>
                                <div className="h-4 w-2/3 bg-slate-200 rounded"></div>
                            </div>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-y-3 mb-8">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex flex-row justify-start items-center gap-3">
                                    <div className="h-3 w-3 bg-slate-200 rounded-full shrink-0"></div>
                                    <div className="h-3 w-24 bg-slate-200 rounded"></div>
                                </div>
                            ))}
                        </div>

                        {/* Footer Buttons */}
                        <div className="flex gap-4 pt-6 border-t border-slate-100">
                            <div className="h-10 w-32 bg-slate-200 rounded-lg"></div>
                            <div className="h-10 flex-1 bg-slate-200 rounded-lg"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}