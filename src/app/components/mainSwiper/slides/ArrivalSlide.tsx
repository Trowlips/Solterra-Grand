import { ShieldCheckIcon } from "@heroicons/react/24/solid";
import FeatureCard from "../../FeatureCard/FeatureCard";

function ArrivalSlide() {
    return (
        <section
            className="
                relative bg-white
                py-14
                ss:py-19
                sm:py-22
            "
        >
            <div className="container mx-auto px-5 sm:px-6">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="w-full md:w-1/3 sticky top-32">
                        <span className="text-teal-600 font-bold tracking-widest text-[.8rem] block mb-2">
                            LEVEL 01
                        </span>
                        <h2 className="text-l font-serif text-slate-900 mb-3">
                            The Arrival & Threshold
                        </h2>
                        <p className="text-slate-600 text-[.7rem] text-justify leading-relaxed mb-2">
                            Perched at the highest point, the Crestline is where
                            the world is left behind. Experience an immaculate
                            welcome paved in white stone, framed by a 180-degree
                            horizon.
                        </p>
                        <div className="hidden flex justify-center items-center gap-4 text-slate-400">
                            <ShieldCheckIcon
                                height={20}
                                width={20}
                                title="Secure Checkpoint"
                            />
                            {/* <Wind height={20} width={20} title="Sea Breeze" />
                        <ShoppingBag height={20} width={20} title="Local Market" /> */}
                        </div>
                    </div>

                    <div className="md:w-2/3 grid gap-8">
                        <FeatureCard
                            title="Crestline Parking Piazza"
                            description="An open-air arrival court of white stone. Staffed by discreet valets, offering your first hint of the luxury within."
                            img="/cabana-1.jpg"
                        />
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="text-xl font-serif mb-3 text-slate-800">
                                    Arrival Pavilion
                                </h3>
                                <p className="text-sm text-slate-600">
                                    Open-air white marble and dark wood. The air
                                    smells of sea salt and hibiscus.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="text-xl font-serif mb-3 text-slate-800">
                                    Garden Atrium
                                </h3>
                                <p className="text-sm text-slate-600">
                                    A lush buffer zone under glass, featuring a
                                    koi pond and waterfall.
                                </p>
                            </div>
                        </div>

                        {/* <FeatureCard
                                title="Grand Vista Gallery"
                                description="The great reveal. A 50-foot high 'wall window' offering a panoramic preview of the terraces below."
                                img="https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                align="right"
                            /> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ArrivalSlide;
