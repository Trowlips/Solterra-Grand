import { auth } from "@/_lib/auth";
import { UserCircle } from "lucide-react";
import Image from "next/image";

async function MemberTierCard() {
    const session = await auth();
    console.log("Mem Tier: ", session);
    return (
        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
            <div className="flex flex-col justify-center items-center mb-6">
                {session?.user?.image ? (
                    <div className="relative h-20 w-20 rounded-full">
                        <Image
                            src={session?.user.image}
                            alt="Avatar"
                            fill
                            className="object-cover rounded-full"
                        />
                    </div>
                ) : (
                    <UserCircle className="h-12 w-12" />
                )}
                <h3 className="font-bold text-lg text-slate-900">
                    {/* {session?.} */}
                </h3>
                <p className="text-sm text-slate-500">
                    {/* {userProfile?.email} */}
                </p>
            </div>

            <div className="space-y-2">
                <div className="flex justify-between p-3 bg-slate-50 rounded-lg text-sm">
                    <span className="text-slate-500">Member Tier</span>
                    <span className="font-bold text-teal-600">
                        {session?.user.memberTier}
                    </span>
                </div>
                <div className="flex justify-between p-3 bg-slate-50 rounded-lg text-sm">
                    <span className="text-slate-500">Points Balance</span>
                    <span className="font-bold text-slate-900">
                        {session?.user.memberPoints}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default MemberTierCard;
