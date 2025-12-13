import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useSwiper } from "swiper/react";

function FrontSlide() {
    const swiper = useSwiper();
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <video
                    src={"/PV.mp4"}
                    autoPlay
                    muted
                    loop
                    className="w-screen h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-b from-slate-800 via-slate-800/50 to-transparent" />
            </div>
            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight drop-shadow-lg">
                    Sanctuary on the Edge
                </h1>
                <p className="text-xl md:text-2xl font-light tracking-wide mb-10 text-slate-100">
                    A vertical journey from the clouds to the cove.
                </p>
                <button
                    onClick={() => swiper.slideTo(1)}
                    className="group flex flex-col items-center gap-2 mx-auto text-sm tracking-[0.2em] hover:text-teal-300 transition-colors cursor-pointer"
                >
                    BEGIN THE DESCENT
                    <ChevronDownIcon className="animate-bounce mt-10 h-10 w-10" />
                </button>
            </div>
        </section>
    );
}

export default FrontSlide;
