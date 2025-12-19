import { useWindowSize } from "@/app/hooks/useWindowSize";
import { Home, Lock, Wind } from "lucide-react";
import Image from "next/image";
import { EffectCards } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import HousingCard from "../../HousingCard/HousingCard";

function HousingSlide() {
    const windowSize = useWindowSize();

    return (
        <section className="h-dvh w-screen relative bg-slate-900 text-slate-100">
            <div className="container h-full w-full mx-auto pt-15 pb-5 md:pt-25 overflow-hidden">
                <div className="h-1/6 w-full text-center mb-5 px-3">
                    <span className="text-[.7rem] text-teal-400 font-bold tracking-widest text-sm block mb-2 md:text-[.9rem]">
                        LEVEL 03
                    </span>
                    <h2 className="text-[1.7rem] md:text-5xl font-serif mb-1">
                        Private{" "}
                        <span className="text-teal-500 italic">Residences</span>
                    </h2>
                    <p className="text-[.8rem] text-slate-400 max-w-2xl mx-auto md:text-[1.2rem]">
                        From intimate cliffside cabins to our signature
                        ultra-luxury villas. Choose your level of seclusion.
                    </p>
                </div>

                <div className="h-4/5 py-2 w-full flex justify-center items-center md:grid-cols-3 gap-8">
                    {windowSize.width && windowSize.width <= 1000 && (
                        <Swiper
                            effect="cards"
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="h-full w-full py-5! px-5! md:px-20! z-20!"
                        >
                            <SwiperSlide className="bg-transparent! ">
                                <HousingCard
                                    src="https://adaorfpiaidcjralrdcp.supabase.co/storage/v1/object/public/pictures/cabins-2.jpg"
                                    icon={<Wind className="h-5 w-5 md:h-8 md:w-8" />}
                                    title="Coastal Cabins"
                                    description="Intimate, rustically elegant
                                            hideaways tucked into the cliffside
                                            greenery. Perfect for couples
                                            seeking a nature-first connection."
                                    featureList={[
                                        "Forest & Sea Views",
                                        "Open-air Shower",
                                        "Private Trekking Path",
                                    ]}
                                />
                            </SwiperSlide>
                            <SwiperSlide className="bg-transparent!">
                                <HousingCard
                                    src="https://adaorfpiaidcjralrdcp.supabase.co/storage/v1/object/public/pictures/housing-1.jpg"
                                    icon={<Home size={20} />}
                                    title="Horizon Houses"
                                    description="Spacious 2-4 bedroom family estates with expansive wrap-around decks. Designed for long-term stays and group gatherings."
                                    featureList={[
                                        "Full Chef's Kitchen",
                                        "Private Media Room",
                                        "Concierge Service",
                                    ]}
                                />
                            </SwiperSlide>
                            <SwiperSlide className="bg-transparent!">
                                <HousingCard
                                    src="https://adaorfpiaidcjralrdcp.supabase.co/storage/v1/object/public/pictures/villa-3.jpg"
                                    signature={true}
                                    icon={<Lock size={20} />}
                                    title="Horizon Houses"
                                    description="Spacious 2-4 bedroom family estates with expansive wrap-around decks. Designed for long-term stays and group gatherings."
                                    featureList={[
                                        "Infinity Plunge Pool",
                                        "Soundproof Suites",
                                        "One-Way Privacy Glass",
                                    ]}
                                />
                            </SwiperSlide>
                        </Swiper>
                    )}
                </div>
            </div>
        </section>
    );
}

export default HousingSlide;
