import Image from "next/image";
import Link from "next/link";

import Icon from "@/app/icon.png";

function Logo() {
    return (
        <Link
            href="/"
            className="flex justify-center items-center gap-4 z-10 h-10 ss:h-15 sm:h-20 md:h-30"
        >
            <div className="relative h-10 w-10 ss:h-15 ss:w-15 sm:h-20 sm:w-20 md:h-25 md:w-25">
                <Image
                    src={Icon}
                    fill
                    className="object-contain"
                    alt="Solterra Grand logo"
                    quality={100}
                />
            </div>
            <span className="text-xl font-semibold text-primary-100 ss:visible">
                Solterra Grand
            </span>
        </Link>
    );
}

export default Logo;
