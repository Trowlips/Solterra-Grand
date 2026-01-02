import { auth } from "@/_lib/auth";
import { User } from "lucide-react";
import React from "react";

async function MemberTierCard() {
    const session = await auth();
    console.log("Mem Tier: ", session);
    return (
        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
            <div className="text-center mb-6">
                <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-3 overflow-hidden">
                    <img src={session?.user.image} alt="Avatar" />
                </div>
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
