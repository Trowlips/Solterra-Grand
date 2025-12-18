import Image from "next/image";

type PoolCardPropsType = {
    src: string;
    icon: React.ReactNode;
    title: string;
    description: string;
};

export default function PoolCard(props: PoolCardPropsType) {
    const { src, icon, title, description } = props;
    return (
        <div className="relative inset-0">
            <div className="absolute inset-0">
                <Image
                    src={src}
                    alt={title}
                    fill
                    className="w-full h-full object-cover opacity-90 rounded-2xl"
                />
                <div
                    className={`absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/50 to-transparent rounded-2xl
                            `}
                />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end px-3 text-white">
                <div className="flex flex-row items-center gap-2 mb-2">
                    {icon}
                    <span className="font-semibold">{title}</span>
                </div>
                <p className="text-left text-[.7rem] font-light mb-3">
                    {description}
                </p>
            </div>
        </div>
    );
}
