import { auth } from "@/_lib/auth";
import { Waves } from "lucide-react";

async function WelcomeBack() {
    const session = await auth();
    return (
        <div className="bg-slate-900 rounded-xl p-4 text-white mb-6 relative overflow-hidden">
            <div className="relative z-10">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                    Welcome back
                </p>
                {/* <p className="font-serif text-lg">{session?.user?.name?.split(" ").at(0)}</p> */}
                <p className="font-serif text-lg">{session?.user?.name}</p>
            </div>
            <Waves className="absolute -bottom-4 -right-4 text-white/10 w-24 h-24" />
        </div>
    );
}

export default WelcomeBack;
