import { ArrowRight } from "lucide-react";
import Image from "next/image";

type NewsCardPropsType = {
    img: string;
    title: string;
    desc: string;
    tag: string;
    date: string;
};

export default function NewsCard(props: NewsCardPropsType) {
    const { img, title, desc, tag, date } = props;
    return (
        <div className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-30 sm:h-48 overflow-hidden relative">
                <Image src={img} alt={title} fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 text-[.5rem] sm:text-xs font-bold px-2 py-1 rounded">
                    {tag}
                </div>
            </div>
            <div className="h-50 sm:h-auto flex flex-col justify-around items-start p-6">
                <p className="text-teal-600 text-[.6rem] sm:text-xs font-bold uppercase tracking-wider mb-1 sm:mb-2">
                    {date}
                </p>
                <h4 className="text-xs md:text-sm font-bold text-slate-900 mb-2">
                    {title}
                </h4>
                <p className="text-[.6rem] sm:text-[.7rem] md:text-xs text-slate-500 leading-relaxed">
                    {desc}
                </p>
                <button className="group mt-4 flex items-center gap-1 text-[.6rem] sm:text-sm font-bold text-slate-800 hover:text-teal-600 transition-colors cursor-pointer">
                    Read More{" "}
                    <ArrowRight className="h-3 w-3 transition-transform ease-in-out group-hover:translate-x-1" />
                </button>
            </div>
        </div>
    );
}
