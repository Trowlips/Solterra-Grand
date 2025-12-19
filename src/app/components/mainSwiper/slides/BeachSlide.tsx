import Image from "next/image";

function BeachSlide() {
    return (
        <section className="h-dvh w-screen pt-15 bg-slate-900">
            <div className="absolute inset-0 opacity-60">
                <Image
                    src="https://adaorfpiaidcjralrdcp.supabase.co/storage/v1/object/public/pictures/cove.jpg"
                    alt="Private Beach"
                    fill
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent" />
            <div className="h-full flex justify-center items-center">
                <div className="relative z-10 container mx-auto px-6">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl max-w-5xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-5 text-white">
                            <div className="flex flex-col">
                                <span className="text-[.8rem] text-teal-300 font-bold tracking-widest text-sm block mb-2">
                                    LEVEL 05 - Beach &amp; Cove
                                </span>
                                <h2 className="text-xl font-semibold font-serif mb-3">
                                    Solterra Beach & Cove
                                </h2>
                                <p className="text-[.8rem] text-slate-200">
                                    The final stop of the Funicular. Walk the
                                    elegant wooden pier to reach pristine white
                                    sands.
                                </p>
                            </div>

                            <div className="flex flex-col space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-teal-200 mb-1">
                                        Neptune&apos;s Beach Club
                                    </h3>
                                    <p className="text-sm text-slate-300">
                                        Barefoot luxury dining under a massive
                                        thatched roof.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-teal-200 mb-1">
                                        The Private Cove
                                    </h3>
                                    <p className="text-sm text-slate-300">
                                        A hidden beach accessible only via a
                                        torch-lit path through the rocks.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-teal-200 mb-1">
                                        Water Sports Hut
                                    </h3>
                                    <p className="text-sm text-slate-300">
                                        Jetskis, paddleboards, and scuba diving.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BeachSlide;
