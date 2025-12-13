import Image from "next/image";

type FeatureCardPropsType = {
    title: string;
    description: string;
    img: string;
    align?: string;
};

function FeatureCard(props: FeatureCardPropsType) {
    const { title, description, img, align = "left" } = props;
    return (
        <div
            className={`
                flex flex-col gap-6 items-center bg-slate-50 bg-red-400! rounded-xl overflow-hidden border border-slate-100 transition-all hover:shadow-lg group h-full
                ${align === "right" ? "md:flex-row-reverse" : "md:flex-row"}
                `}
        >
            <div className="relative w-full md:w-1/2 h-20 overflow-hidden">
                <Image
                    src={img}
                    alt={title}
                    fill
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
            </div>
            <div className="w-full md:w-1/2 p-6">
                <h3 className="text-[.5rem] font-serif text-slate-800 mb-3">
                    {title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-[.5rem]">{description}</p>
            </div>
        </div>
    );
}

export default FeatureCard;
