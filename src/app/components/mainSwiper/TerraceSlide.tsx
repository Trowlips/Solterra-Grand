import Image from "next/image";
import { useSwiper, useSwiperSlide } from "swiper/react";

function TerraceSlide() {
    const swiper = useSwiper();
    const { isActive, isPrev, isNext } = useSwiperSlide();

    return (
        <div className="
            flex flex-col h-screen w-screen bg-[#f1efed] pt-24
            "
        >
            <div className="px-10">
                <h2 className="text-start text-xl">Terrace Resort</h2>
                <p className="text-start text-[.7rem] pt-1 leading-5">
                    Contemporary &quot;Hanging Gardens&quot; style. The resort
                    is carved into a coastal cliffside, utilizing natural stone,
                    slat wood, and abundant greenery.
                </p>
            </div>
            <div className="relative h-60 w-10/12 mx-10 mt-10">
                <Image src="/terrace-showcase.jpg" quality={100} fill alt="Terrace Showcase" className="object-cover" />
            </div>
            <div className="mt-10">
                <h2>Terrace Levels</h2>
                <span>Welcoming Area</span>
            </div>
        </div>
    );
}

export default TerraceSlide;
