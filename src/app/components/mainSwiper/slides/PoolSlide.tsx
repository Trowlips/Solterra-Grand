import { Coffee, Droplets, Sun } from "lucide-react";
import Image from "next/image";
import { useSwiperSlide } from "swiper/react";

function PoolSlide() {
    const { isActive } = useSwiperSlide();
    return (
        <section className="h-screen w-screen bg-linear-to-b from-teal-100 to-white">
            <div className="container h-full w-full mx-auto pt-15 pb-5 px-6">
                <div className="text-center mb-3">
                    <span className="text-[.7rem] text-teal-600 font-bold tracking-widest text-sm block mb-1">
                        LEVEL 04
                    </span>
                    <h2 className="text-[1.7rem] font-serif text-slate-900">
                        Lounge & Swim
                    </h2>
                </div>
                <div className="h-6/7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {/* Lagoon Pool and Bar */}
                    <div className="relative inset-0">
                        <div className="absolute inset-0">
                            <Image
                                src="/pool-bar.jpg"
                                alt="Lagoon Pool & Sunken Bar"
                                fill
                                className="w-full h-full object-cover opacity-90 rounded-2xl"
                            />
                            <div
                                className={`absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/30 to-transparent rounded-2xl
                            `}
                            />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-end px-3 text-white">
                            <div className="flex flex-row items-center gap-2 mb-2">
                                <Droplets size={25} className="text-teal-500" />
                                <span className="font-semibold">
                                    Lagoon Pool & Sunken Bar
                                </span>
                            </div>
                            <p className="text-left text-[.7rem] font-light mb-3">
                                A massive free-form pool with a swim-up bar
                                hidden under a cascading waterfall.
                            </p>
                        </div>
                    </div>
                    {/* Thermal Pool */}
                    <div className="relative inset-0">
                        <div className="absolute inset-0">
                            <Image
                                src="/pool-bar.jpg"
                                alt="Thermal Pool"
                                fill
                                className="w-full h-full object-cover opacity-90 rounded-2xl"
                            />
                            <div
                                className={`absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/30 to-transparent rounded-2xl
                            `}
                            />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-end px-3 text-white">
                            <div className="flex flex-row items-center gap-2 mb-2">
                                <Sun size={25} className="text-teal-500" />
                                <span className="font-semibold">
                                    Thermal Pool
                                </span>
                            </div>
                            <p className="text-left text-[.7rem] font-light mb-3">
                                A circular hot pool built on the terrace edge
                                for therapeutic soaking with a view.
                            </p>
                        </div>
                    </div>

                    <div className="relative inset-0">
                        <div className="absolute inset-0">
                            <Image
                                src="/pool-bar.jpg"
                                alt="Private Cabanas"
                                fill
                                className="w-full h-full object-cover opacity-90 rounded-2xl"
                            />
                            <div
                                className={`absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/30 to-transparent rounded-2xl
                            `}
                            />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-end px-3 text-white">
                            <div className="flex flex-row items-center gap-2 mb-2">
                                <Coffee size={25} className="text-teal-500" />
                                <span className="font-semibold">
                                    Private Cabanas
                                </span>
                            </div>
                            <p className="text-left text-[.7rem] font-light mb-3">
                                20 exclusive air-conditioned &lsquo;small houses&rsquo; with
                                minibars and plush daybeds.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PoolSlide;
