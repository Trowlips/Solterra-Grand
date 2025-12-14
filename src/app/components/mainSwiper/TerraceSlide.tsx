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
            
        </div>
    );
}

export default TerraceSlide;
