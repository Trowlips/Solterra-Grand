import Image from "next/image";
import Link from "next/link";

import Icon from "@/app/icon.png";

type LogoPropTypes = {
    className?: string;
};

function Logo(props: LogoPropTypes) {
    const { className } = props
    return (
        <Link
            href="/"
            className={
                `flex justify-center items-center gap-4 z-10 h-10
                ss:h-15
                sm:h-18 ` +
                className
            }
        >
            <div
                className="
                relative h-10 w-10 transition-[height/width]
                ss:h-15 ss:w-15
                sm:h-18 sm:w-18
                
                "
            >
                <Image
                    src={Icon}
                    fill
                    className="object-contain"
                    alt="Solterra Grand logo"
                    quality={100}
                />
            </div>
            <span
                className="
                text-xl font-semibold text-primary-100 transition-[font]
                md:text-[1.5rem]
                lg:text-[1.8rem]
                "
            >
                Solterra Grand
            </span>
        </Link>
    );
}

export default Logo;
