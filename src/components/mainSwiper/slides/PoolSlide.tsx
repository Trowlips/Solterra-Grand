"use client"
import PoolCard from "@/components/PoolCard";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Coffee, Droplets, Sun } from "lucide-react";

function PoolSlide() {
    const windowSize = useWindowSize();
    return (
        <section className="h-dvh w-screen bg-linear-to-b from-teal-100 to-white">
            <div className="container h-full w-full mx-auto pt-15 pb-5 px-6 md:pt-25">
                <div className="text-center mb-3">
                    <span className="text-[.7rem] text-teal-600 font-bold tracking-widest text-sm block mb-1">
                        LEVEL 04
                    </span>
                    <h2 className="text-[1.7rem] font-serif text-slate-900">
                        {windowSize.width && windowSize.width >= 740 && (
                            <span>Solara Terrace: </span>
                        )}
                        Lounge & Swim
                    </h2>
                </div>
                <div className="h-6/7 grid grid-cols-1 md:flex md:flex-wrap md:justify-center lg:grid-cols-3 gap-3 md:gap-5">
                    {/* Lagoon Pool and Bar */}
                    <PoolCard
                        src="https://adaorfpiaidcjralrdcp.supabase.co/storage/v1/object/public/pictures/pool-bar-1.jpg"
                        icon={<Droplets size={25} className="text-teal-500" />}
                        title="Lagoon Pool & Sunken Bar"
                        description="A massive free-form pool with a swim-up bar hidden under a cascading waterfall."
                    />
                    {/* Thermal Pool */}
                    <PoolCard
                        src="https://adaorfpiaidcjralrdcp.supabase.co/storage/v1/object/public/pictures/thermal-pool.jpg"
                        icon={<Sun size={25} className="text-teal-500" />}
                        title="Thermal Pool"
                        description="A circular hot pool built on the terrace edge for therapeutic soaking with a view."
                    />
                    {/* Private Cabanas */}
                    <PoolCard
                        src="https://adaorfpiaidcjralrdcp.supabase.co/storage/v1/object/public/pictures/air-cabana.jpg"
                        icon={<Coffee size={25} className="text-teal-500" />}
                        title="Private Cabanas"
                        description="20 exclusive air-conditioned &lsquo;small houses&rsquo; with minibars and plush daybeds."
                    />
                </div>
            </div>
        </section>
    );
}

export default PoolSlide;
