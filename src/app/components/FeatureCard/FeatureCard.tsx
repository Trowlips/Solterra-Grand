import Image from "next/image";
import { ReactNode } from "react";

// type FeatureCardPropsType = {
//     title: string;
//     description: string;
//     img: string;
//     align?: "left" | "right";
//     orientation?: "horizontal" | "vertical";
//     className?: string;
// };

// function FeatureCard2(props: FeatureCardPropsType) {
//     const {
//         title,
//         description,
//         img,
//         align = "left",
//         orientation = "horizontal",
//         className,
//     } = props;
//     return (
//         <div
//             className={
//                 `
//                 flex gap-6 items-center bg-slate-50 rounded-xl overflow-hidden border border-slate-100 transition-all hover:shadow-lg group
//                 ${align === "right" ? "flex-row-reverse" : "flex-row"}
//                 ` +
//                 " " +
//                 className
//             }
//         >
//             <div className="relative w-full md:w-1/2 h-full">
//                 <Image
//                     src={img}
//                     alt={title}
//                     fill
//                     className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
//                 />
//             </div>
//             <div className="w-full md:w-1/2 h-full py-1">
//                 <h3 className="text-[.7rem] font-serif text-slate-800 mb-1">
//                     {title}
//                 </h3>
//                 <p className="text-slate-600 leading-normal text-[.5rem] text-left">
//                     {description}
//                 </p>
//             </div>
//         </div>
//     );
// }

type FeatureCardPropType = {
    children: ReactNode;
    className?: string;
};
function FeatureCard(props: FeatureCardPropType) {
    const { children, className } = props;
    return (
        <div
            className={`flex items-center bg-slate-50 rounded-xl border border-slate-100 overflow-hidden transition-all hover:shadow-lg group` + " " + className}
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
        <div className={`relative w-full md:w-1/2 h-full`}>
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
        <div className="w-full md:w-1/2 h-full py-1">
            <h3
                className={
                    `text-[.7rem] font-semibold font-serif text-slate-800 mb-1 sm:text-[1rem]` +
                    " " +
                    titleClass
                }
            >
                {title}
            </h3>
            <p
                className={
                    descriptionClass +
                    ` text-slate-600 leading-normal text-[.5rem] text-left px-2`
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
