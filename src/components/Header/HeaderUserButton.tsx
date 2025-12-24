import { auth } from "@/_lib/auth";
import { User, UserCircle, UserCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function HeaderUserButton() {
    const session = await auth();
    console.log("HeaderUserButton: ", session);
    return (
        <div className="lg:flex items-center gap-4">
            <Link
                href={"/portal"}
                className={`flex items-center gap-2 text-sm text-teal-600 font-bold tracking-wider hover:text-teal-800 transition-colors duration-300`}
            >
                {session ? (
                    <div className="flex flex-row items-center gap-2">
                        {/* <span className="md:text-base">{session.user?.name?.split(" ").at(0)}</span> */}
                        {session.user?.image ? (
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
                ) : (
                    <div className="flex flex-row items-center gap-3">
                        <span className="md:text-sm">LOGIN</span>{" "}
                        <UserCircle2 className="h-6 w-6" />
                    </div>
                )}
            </Link>
        </div>
    );
}
