import Image from "next/image";

type HousingCardPropsType = {
    src: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    featureList: string[];
    signature?: boolean;
};

export default function HousingCard(props: HousingCardPropsType) {
    const {
        src,
        icon,
        title,
        description,
        featureList,
        signature = false,
    } = props;
    return (
        <div
            className={`h-full bg-slate-800 rounded-xl overflow-hidden border ${
                signature ? "border-teal-500/30" : "border-black/40"
            }`}
        >
            {signature && (
                <div className="absolute top-4 right-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                    Signature
                </div>
            )}
            <div className="relative h-1/3 md:h-3/5 overflow-hidden">
                <Image
                    src={src}
                    alt="Cabin"
                    fill
                    quality={90}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
            </div>
            <div className="p-5">
                <div className="flex items-center gap-3 mb-1 text-teal-400 ">
                    {icon}
                    <h3 className="text-md font-bold text-white md:text-xl">{title}</h3>
                </div>
                <p className="text-[.9rem] text-left text-slate-400 mb-6 md:text-base">
                    {description}
                </p>

                <ul className="space-y-2 text-sm text-slate-300">
                    {featureList.map((feature) => (
                        <li key={feature} className="flex gap-2 md:text-[1rem]">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-teal-500 mt-1.5" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
