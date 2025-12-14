import { useSwiperSlide } from "swiper/react";
import FeatureCard from "../../FeatureCard/FeatureCard";
import { Shield } from "lucide-react";

function ArrivalSlide() {
    const { isActive } = useSwiperSlide();

    return (
        <section
            className="
                relative bg-white h-screen overflow-hidden
                py-16
                ss:py-19
                sm:py-22
            "
        >
            <div className="container mx-auto px-5 sm:px-6">
                <div className="flex flex-col md:flex-row gap-5 items-start">
                    <div
                        className={`
                            w-full md:w-1/3 transition-all duration-700 opacity-0  ${
                                isActive
                                    ? "opacity-100 delay-500"
                                    : "-translate-y-10"
                            }
                        `}
                    >
                        <span className="text-teal-600 font-bold tracking-widest text-[.8rem] block">
                            LEVEL 01
                        </span>
                        <h2 className="text-l font-serif text-slate-900 mb-3">
                            The Arrival & Threshold
                        </h2>
                        <p className="text-slate-600 text-[.6rem] text-justify leading-relaxed">
                            Perched at the highest point, the Crestline is where
                            the world is left behind. Experience an immaculate
                            welcome paved in white stone, framed by a 180-degree
                            horizon.
                        </p>
                        <div className="hidden flex justify-center items-center gap-4 text-slate-400">
                            <Shield height={20} width={20} />
                            {/* <Wind height={20} width={20} title="Sea Breeze" />
                        <ShoppingBag height={20} width={20} title="Local Market" /> */}
                        </div>
                    </div>

                    <div className="md:w-2/3 grid gap-3">
                        <FeatureCard
                            className={`
                                transition-all duration-700
                                
                            `}
                        >
                            <FeatureCard.Image
                                src="/cabana-1.jpg"
                                alt="Crestline Parking Piazza"
                            />
                            <FeatureCard.Content
                                title="Crestline Parking Piazza"
                                description="An open-air arrival court of white stone. Staffed by discreet valets, offering your first hint of the luxury within."
                                titleClass="text-red-400"
                            />
                        </FeatureCard>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 h-22">
                                <h3 className="text-[.8rem] font-semibold font-serif mb-1 text-slate-800">
                                    Arrival Pavilio
                                </h3>
                                <p className="text-[.5rem] text-slate-600">
                                    Open-air white marble and dark wood. The air
                                    smells of sea salt and hibiscus.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 h-22">
                                <h3 className="text-[.8rem] font-semibold font-serif mb-1 text-slate-800">
                                    Garden Atrium
                                </h3>
                                <p className="text-[.5rem] text-slate-600">
                                    A lush buffer zone under glass, featuring a
                                    koi pond and waterfall.
                                </p>
                            </div>
                        </div>

                        <FeatureCard>
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
