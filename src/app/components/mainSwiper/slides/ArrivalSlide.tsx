import { useSwiperSlide } from "swiper/react";
import FeatureCard from "../../FeatureCard/FeatureCard";
import { Shield, ShoppingBag, Wind } from "lucide-react";

function ArrivalSlide() {
    const { isActive, isPrev, isNext } = useSwiperSlide();

    return (
        <section
            className="
                relative bg-white h-screen overflow-hidden
                py-16
                ss:py-19
                sm:py-22
            "
        >
            <div className="container h-full mx-auto px-5 sm:px-6">
                <div className="h-full flex flex-col md:flex-row gap-5 items-start">
                    <div
                        className={`
                            w-full md:w-1/3 transition-all duration-700 opacity-0
                            ${isActive ? "opacity-100 delay-1000" : ""}
                            ${
                                isPrev
                                    ? "-translate-y-10"
                                    : isNext
                                    ? "translate-y-10"
                                    : ""
                            }
                        `}
                    >
                        <span className="text-teal-600 font-bold tracking-widest text-[.7rem] block ss:my-1 lg:text-lg lg:mb-5">
                            LEVEL 01
                        </span>
                        <h2 className="text-[1.5rem] font-serif text-slate-900 mb-2 lg:text-4xl lg:mb-5">
                            The Arrival & Threshold
                        </h2>
                        <p className="text-slate-600 text-[.7rem] text-left leading-relaxed short:mb-1 ss:text-[.7rem] lg:text-lg">
                            Perched at the highest point, the Crestline is where
                            the world is left behind. Experience an immaculate
                            welcome paved in white stone, framed by a 180-degree
                            horizon.
                        </p>
                        <div className="hidden sm:flex justify-center items-center gap-4 text-slate-400 mt-5">
                            <Shield height={20} width={20} />
                            <Wind height={20} width={20} />
                            <ShoppingBag height={20} width={20} />
                        </div>
                    </div>

                    <div className="h-full md:w-2/3 grid grid-rows-[1fr_0.5fr_1fr] short:grid-rows-[1fr_0.7fr_1fr] gap-3 ss:gap-2 sm:gap-4 sm:py-5">
                        <FeatureCard
                            className={`
                                transition-all duration-700 opacity-0
                                ${
                                    isActive
                                        ? "opacity-100 delay-1500"
                                        : "translate-x-10 delay-500"
                                }
                            `}
                        >
                            <FeatureCard.Image
                                src="/cabana-1.jpg"
                                alt="Crestline Parking Piazza"
                            />
                            <FeatureCard.Content
                                title="Crestline Parking Piazza"
                                description="An open-air arrival court of white stone. Staffed by discreet valets, offering your first hint of the luxury within."
                            />
                        </FeatureCard>
                        <div
                            className={`
                                grid grid-cols-2 gap-2 transition-all duration-700 opacity-0
                                ${
                                    isActive
                                        ? "opacity-100 delay-2000"
                                        : "delay-500"
                                }
                                    ${
                                        isPrev
                                            ? "-translate-y-10"
                                            : isNext
                                            ? "translate-y-10"
                                            : ""
                                    }
                            `}
                        >
                            <div
                                className={`
                                    bg-slate-50 p-2 rounded-xl border border-slate-100 lg:p-5 short:py-3 
                                `}
                            >
                                <h3 className="text-[.9rem] font-semibold font-serif mb-1 text-slate-800 sm:text-[1rem] lg:text-2xl tall:text-lg">
                                    Arrival Pavilion
                                </h3>
                                <p className="text-[.6rem] ss:text-[.6rem] text-slate-600 lg:text-[.8rem] tall:text-[.7rem]">
                                    Open-air white marble and dark wood. The air
                                    smells of sea salt and hibiscus.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 lg:p-5 short:py-3">
                                <h3 className="text-[.9rem] font-semibold font-serif mb-1 text-slate-800 sm:text-[1rem] lg:text-2xl tall:text-lg">
                                    Garden Atrium
                                </h3>
                                <p className="text-[.6rem] ss:text-[.6rem] sm:text-[.7rem] text-slate-600 lg:text-[.8rem] tall:text-[.7rem]">
                                    A lush buffer zone under glass, featuring a
                                    koi pond and waterfall.
                                </p>
                            </div>
                        </div>

                        <FeatureCard
                            className={`
                                transition-all duration-700 opacity-0
                                ${
                                    isActive
                                        ? "opacity-100 delay-2500"
                                        : "-translate-x-10 delay-500"
                                }
                            `}
                        >
                            <FeatureCard.Content
                                title="Grand Vista Gallery"
                                description="The great reveal. A 50-foot high 'wall window' offering a panoramic preview of the terraces below."
                            />
                            <FeatureCard.Image
                                src="/terrace-showcase.jpg"
                                alt="Terrace"
                            />
                        </FeatureCard>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ArrivalSlide;
