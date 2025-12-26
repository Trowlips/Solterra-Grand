import { Bell, UserCircle } from "lucide-react";
import PortalHeaderTitle from "./PortalHeaderTitle";
import { auth } from "@/_lib/auth";
import Image from "next/image";

export default async function PortalHeader() {
    const session = await auth();
    console.log(session?.user?.image);
    return (
        <header className="overflow-y-auto bg-slate-50/50 py-8 px-8 lg:p-12 relative">
            <div className="flex justify-between items-center mt-5">
                <PortalHeaderTitle />

                <div className="flex items-center gap-4">
                    <button className="p-2 text-slate-400 hover:text-teal-600 transition-colors relative cursor-pointer">
                        <Bell size={20} />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white" />
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
                        {session && session.user?.image ? (
                            <div className="relative h-10 w-10 rounded-full outline-2  outline-teal-600">
                                <Image
                                    src={session.user?.image}
                                    alt={`${session.user?.name} profile picture`}
                                    fill
                                    className="object-cover rounded-full"
                                />
                            </div>
                        ) : (
                            <UserCircle className="h-12 w-12" />
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
