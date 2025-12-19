import Image from "next/image";
import { ReactNode } from "react";

type FeatureCardPropType = {
    children: ReactNode;
    className?: string;
};
function FeatureCard(props: FeatureCardPropType) {
    const { children, className } = props;
    return (
        <div
            className={
                `h-full flex items-center bg-slate-50 rounded-xl border border-slate-100 overflow-hidden transition-all hover:shadow-lg group` +
                " " +
                className
            }
        >
            {children}
        </div>
    );
}

type ImagePropTypes = {
    src: string;
    alt: string;
    containerClass?: string;
    imageClass?: string;
};
function ImageContainer(props: ImagePropTypes) {
    const { src, alt, containerClass, imageClass } = props;
    return (
        <div className={`relative w-2/5 md:w-1/2 h-full`}>
            <Image
                src={src}
                alt={alt}
                fill
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
            />
        </div>
    );
}

type ContentContainerPropTypes = {
    title: string;
    description: string;
    titleClass?: string;
    descriptionClass?: string;
};
function ContentContainer(props: ContentContainerPropTypes) {
    const { title, description, titleClass, descriptionClass } = props;
    return (
        <div className="w-3/5 md:w-1/2 h-full py-3 px-1 sm:py-4 sm:px-1 flex flex-col justify-center items-center">
            <h3
                className={
                    `text-[.8rem] px-1 font-semibold font-serif text-slate-800 mb-1 ss:text-[.8rem] sm:text-[1rem] lg:text-2x` +
                    " " +
                    titleClass
                }
            >
                {title}
            </h3>
            <p
                className={
                    descriptionClass +
                    ` text-[.7rem] text-left text-slate-600 leading-normal px-2 ss:text-[.6rem] sm:text-[.7rem] lg:text-[1rem]`
                }
            >
                {description}
            </p>
        </div>
    );
}

FeatureCard.Image = ImageContainer;
FeatureCard.Content = ContentContainer;

export default FeatureCard;
