import Image from "next/image";
import Link from "next/link";

import Icon from "@/app/icon.png";

type LogoPropTypes = {
    className?: string;
    activeIndex?: number;
    toTheTop: () => void;
};

function Logo(props: LogoPropTypes) {
    const { className, activeIndex, toTheTop } = props;
    return (
        <button
            onClick={toTheTop}
            className={
                `flex justify-center items-center gap-4 z-10 h-10 cursor-pointer
                ss:h-15
                sm:h-18 ` + className
            }
        >
            <div
                className="
                relative h-10 w-10 transition-[height,width]
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
                className={`
                    text-xl font-semibold text-primary-100 transition-colors duration-1000
                    md:text-[1.5rem]
                    lg:text-[1.8rem]
                    xl:text-[2rem]
                    ${Boolean(activeIndex) ? "text-slate-900" : "text-white"}
                `}
            >
                Solterra <span className="text-teal-600">GRAND</span>
            </span>
        </button>
    );
}

export default Logo;
