"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SideNavLinkPropsType = {
    to: string;
    label: string;
    Icon: React.ReactNode;
};

function SideNavLink(props: SideNavLinkPropsType) {
    const { to, label, Icon } = props;

    const pathname = usePathname();
    return (
        <Link
            href={to}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                pathname === to
                    ? "bg-teal-600 text-white shadow-lg shadow-teal-200"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
            }`}
        >
            {Icon}
            <span className="text-[.7rem] font-medium tracking-wide">{label}</span>
        </Link>
    );
}

export default SideNavLink;
