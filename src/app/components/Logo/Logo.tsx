import Image from "next/image";
import Link from "next/link";

import Icon from "@/app/icon.png";

function Logo() {
    return (
        <Link href="/" className="flex items-center gap-4 z-10">
            <div className="relative md:h-20 md:w-20 sm:h-28 sm:w-28">
                <Image
                    src={Icon}
                    // height="60"
                    // width="60"
					fill
					className="object-contain"
                    alt="Solterra Grand logo"
                    quality={100}
                />
            </div>
            <span className="text-xl font-semibold text-primary-100">
                Solterra Grand
            </span>
        </Link>
    );
}

export default Logo;
