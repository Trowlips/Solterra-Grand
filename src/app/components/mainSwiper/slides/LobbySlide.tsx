import Image from "next/image";

import { useWindowSize } from "@/app/hooks/useWindowSize";
import { Utensils, Wine } from "lucide-react";
import { useSwiperSlide } from "swiper/react";

function LobbySlide() {
    const { isActive } = useSwiperSlide();
    const windowSize = useWindowSize();

    const imageSource =
        windowSize.width && windowSize.width >= 1024
            ? "/watercourtyard-1.jpg"
            : "/watercourtyard.jpg";

    return (
        <section className="h-dvh w-screen">
            <div className="container h-full w-full mx-auto pt-15 pb-5 px-6 md:pt-25">
                <div
                    className={`
                        w-full text-center mb-2 md:mb-10 transition-all duration-700 opacity-0
                        ${
                            isActive
                                ? "opacity-100 delay-1200"
                                : "-translate-y-10 delay-700"
                        }
                    `}
                >
                    <span className="text-[.7rem] text-teal-600 font-bold tracking-widest block mb-2 md:text-[.9rem]">
                        LEVEL 02
                    </span>
                    <h2 className="text-[1.7rem] sm:text-4xl font-serif text-slate-900 mb-1 md:mb-5">
                        The Social Hub
                    </h2>
                    <p className="text-[.8rem] text-slate-600 md:text-[1rem] md:px-5">
                        The beating heart of Solterra. A massive U-shaped
                        terrace centered around the spectacular Water Courtyard.
                    </p>
                </div>

                <div
                    className={`w-full h-3/4 relative rounded-3xl overflow-hidden shadow-2xl bg-white mb-12 transition-all duration-700 opacity-0
                        ${
                            isActive
                                ? "opacity-100 delay-1200"
                                : "translate-y-30 delay-1200 duration-0!"
                        }
                    `}
                >
                    <div className="absolute inset-0">
                        <Image
                            // src={imageSource}
                            src="https://adaorfpiaidcjralrdcp.supabase.co/storage/v1/object/public/pictures/watercourtyard.jpg"
                            alt="Infinity Pool"
                            fill
                            className="w-full h-full object-cover opacity-90"
                        />
                        <div
                            className={`absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/60 to-transparent transition-all duration-700 opacity-0
                                ${
                                    isActive
                                        ? "opacity-100 delay-1700"
                                        : "delay-500"
                                }
                            `}
                        />
                    </div>
                    <div
                        className={`relative z-10 h-full flex flex-col justify-end py-5 md:py-20 md:px-10 text-white transition-all duration-700 opacity-0
                            ${isActive ? "opacity-100 delay-2400" : "delay-500"}
                        `}
                    >
                        <h3 className="text-2xl font-semibold font-serif mb-1 md:text-4xl md:mb-5">
                            The Water Courtyard
                        </h3>
                        <p className="text-[.7rem] text-slate-100 px-2 mb-2 md:text-[1rem] md:mb-10">
                            A crystal-clear infinity pool that merges seamlessly
                            with the sea. Bisected by the Central Jetty leading
                            to the Funicular Station.
                        </p>
                        <div className="flex flex-col md:flex-row gap-2 px-3 md:gap-5">
                            <div className="bg-white/10 backdrop-blur-md py-2 px-6 rounded-lg border border-white/20 flex-1 md:py-4">
                                <div className="flex items-center gap-2 mb-1 md:mb-5">
                                    <Wine className="text-teal-300 h-5 w-5 md:h-8 md:w-8" />
                                    <h4 className="font-bold text-base md:text-2xl">
                                        Lido Bar
                                    </h4>
                                </div>
                                <p className="text-xs text-left leading-3.5 text-slate-200 md:text-base md:leading-5">
                                    Sleek, indoor cooling. Dark wood and
                                    cocktails.
                                </p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md py-2 px-6 rounded-lg border border-white/20 flex-1 md:py-4">
                                <div className="flex items-center gap-2 mb-1 md:mb-5">
                                    <Utensils className="text-teal-300 h-5 w-5 md:h-8 md:w-8" />
                                    <h4 className="font-bold text-base md:text-xl">
                                        Orizon Restaurant
                                    </h4>
                                </div>
                                <p className="text-xs text-left leading-3.5 text-slate-200 md:text-base md:leading-5">
                                    Al fresco dining on the shaded terrace edge.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LobbySlide;
