"use client";

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

function PortalHeaderTitle() {
    const pathname = usePathname();
    const activePath = pathname.split("/").at(-1) || "news";
    return (
        <div>
            <h2 className="text-2xl font-serif text-slate-900 font-bold">
                {headerContent[activePath].title}
            </h2>
            <p className="text-slate-500 text-sm">
                {headerContent[activePath].desc}
            </p>
        </div>
    );
}

export default PortalHeaderTitle;
