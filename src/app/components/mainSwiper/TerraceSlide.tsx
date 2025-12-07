import { useSwiper, useSwiperSlide } from "swiper/react";

function TerraceSlide() {
    const swiper = useSwiper();
    const { isActive, isPrev, isNext } = useSwiperSlide();

    console.log(isActive, isPrev, isNext);

    return (
        <div
            className="flex flex-col justify-center items-center h-screen w-screen bg-amber-300
                "
        >
            <h2
                className={`
                    transition-all opacity-0 duration-1000
                    ${
                        isActive
                            ? "opacity-100 delay-700"
                            : isNext
                            ? "translate-y-full"
                            : isPrev
                            ? "-translate-y-full"
                            : ""
                    }`}
            >
                Slide 2
            </h2>
            <div>
                <button className="" onClick={() => swiper.slideNext()}>Next</button>
            </div>
        </div>
    );
}

export default TerraceSlide;
