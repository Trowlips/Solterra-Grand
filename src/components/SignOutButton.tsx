import { LogOut } from "lucide-react";
import { signOutAction } from "../_lib/actions";

function SignOutButton() {
    return (
        <form action={signOutAction}>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors">
                <LogOut size={20} />
                <span className="text-[.7rem] font-medium">Sign Out</span>
            </button>
        </form>
    );
}

export default SignOutButton;
