import { auth } from "@/_lib/auth";
import { User } from "lucide-react";
import Link from "next/link";

export default async function UserButton() {
    const session = await auth();
    console.log("SESSION: ", session);
    return (
        <Link href={"/login"} className="flex items-center justify-center gap-2 w-full py-3 text-slate-600 hover:text-teal-600 font-semibold text-sm tracking-wide border border-slate-300 rounded-lg transition-colors hover:bg-white hover:border-teal-600 hover:shadow-sm">
            <User size={18} />
            MEMBER LOGIN
        </Link>
    );
}
