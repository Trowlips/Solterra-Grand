import { auth } from "@/_lib/auth";
import { User } from "lucide-react";
import Link from "next/link";

export default async function UserButton() {
    const session = await auth();
    console.log("SESSION: ", session);

    return (
        <Link
            href={"/portal"}
            className={`flex items-center justify-center gap-2 w-full py-3 font-semibold text-sm tracking-wide border rounded-lg transition-colors hover:bg-white hover:border-teal-600 hover:shadow-sm
                ${
                    !!session
                        ? "text-teal-700 border-teal-200 bg-teal-50"
                        : "text-slate-600 border-slate-300"
                }    
            `}
        >
            <User size={18} />
            {session ? "MEMBER DASHBOARD" : "MEMBER LOGIN"}
        </Link>
    );
}
