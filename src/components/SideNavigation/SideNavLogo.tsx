import Image from "next/image";
import Icon from "@/app/icon.png";
import Link from "next/link";

function SideNavLogo() {
    return (
        <div>
            <Link href={"/"} className="flex items-center gap-3 mb-5">
                <div className="relative h-10 w-10  rounded-full overflow-hidden border-2 border-teal-600 shadow-sm">
                    <Image
                        src={Icon}
                        alt="Solterra Logo"
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <h1 className="font-serif font-bold text-slate-900 leading-none tracking-wide">
                        SOLTERRA
                    </h1>
                    <span className="text-xs text-teal-600 font-bold tracking-[0.2em]">
                        MEMBERS
                    </span>
                </div>
            </Link>
        </div>
    );
}

export default SideNavLogo;
