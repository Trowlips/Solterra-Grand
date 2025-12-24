"use client";

import { Bell } from "lucide-react";
import { usePathname } from "next/navigation";

type HeaderContentType = Record<string, { title: string; desc: string }>;

const headerContent: HeaderContentType = {
    news: {
        title: "Latest Updates",
        desc: "What is happening at Solterra Grand today.",
    },
    residences: {
        title: "Reserve Your Sanctuary",
        desc: "Browse our exclusive collection of cliffside stays.",
    },
    account: {
        title: "Member Profile",
        desc: "Manage your reservations and preferences.",
    },
};

export default function PortalHeader() {
    const pathname = usePathname();
    const activePath = pathname.split("/").at(-1) || "news";
    return (
        <header className="overflow-y-auto bg-slate-50/50 py-8 px-8 lg:p-12 relative">
            <div className="flex justify-between items-center mt-5">
                <div>
                    <h2 className="text-2xl font-serif text-slate-900 font-bold">
                        {headerContent[activePath].title}
                    </h2>
                    <p className="text-slate-500 text-sm">
                        {headerContent[activePath].desc}
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <button className="p-2 text-slate-400 hover:text-teal-600 transition-colors relative cursor-pointer">
                        <Bell size={20} />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                    </button>
                    <div className="w-px h-8 bg-slate-200"></div>
                    <div className="flex items-center gap-3">
                        <div className="text-right hidden md:block">
                            <p className="text-xs font-bold text-slate-900">
                                Solterra Elite
                            </p>
                            <p className="text-[10px] text-slate-400">
                                ID: #000-XXX
                            </p>
                        </div>
                        <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold hover:bg-teal-200 transition-colors duration-300 cursor-pointer">
                            G
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
