import Image from "next/image";

function BeachSlide() {
    return (
        <section className="h-screen w-screen pt-15 bg-slate-900">
            <div className="absolute inset-0 opacity-60">
                <Image
                    src="/cable.jpg"
                    alt="Private Beach"
                    fill
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

            <div className="relative z-10 container mx-auto px-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 text-white">
                        <div className="flex-1">
                            <span className="text-teal-300 font-bold tracking-widest text-sm block mb-2">
                                LEVEL 05 - SEA LEVEL
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BeachSlide;
