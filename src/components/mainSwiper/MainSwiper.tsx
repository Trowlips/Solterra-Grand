"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Controller, Mousewheel, Pagination, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FrontSlide from "./slides/FrontSlide";

import { useSwiperStore } from "@/store/useSwiperStore";
import ArrivalSlide from "./slides/ArrivalSlide";
import BeachSlide from "./slides/BeachSlide";
import HousingSlide from "./slides/HousingSlide";
import LobbySlide from "./slides/LobbySlide";
import PoolSlide from "./slides/PoolSlide";
import "./styles.css";

type MainSwiperType = {
    children: React.ReactNode;
    // slides: React.ReactNode[];
};

// function MainSwiper({ children, slides }: MainSwiperType) {
function MainSwiper({ children }: MainSwiperType) {
    const activeIndex = useSwiperStore((state) => state.activeIndex);
    const setActiveIndex = useSwiperStore((state) => state.setActiveIndex);
    const setSwiperInstance = useSwiperStore((state) => state.setSwiperInstance);

    return (
        <div className="bg-background">
            <main className="h-dvh">
                <Swiper
                    direction="vertical"
                    slidesPerView={1}
                    mousewheel={true}
                    pagination={{ clickable: true }}
                    speed={1500}
                    modules={[Mousewheel, Parallax, Pagination, Controller]}
                    simulateTouch={false}
                    breakpoints={{
                        1024: {
                            allowTouchMove: false,
                        },
                    }}
                    className={`
                        mySwiper
                        [&_.swiper-pagination-bullet]:first:hidden!
                        [&_.swiper-pagination-bullets]:w-fit!
                        [&_.swiper-pagination-bullets]:transition-all!
                        [&_.swiper-pagination-bullets]:duration-1000!
                        ${
                            Boolean(activeIndex)
                                ? "[&_.swiper-pagination-bullets]:opacity-100 [&_.swiper-pagination-bullets]:left-1!"
                                : "[&_.swiper-pagination-bullets]:-left-10! [&_.swiper-pagination-bullets]:opacity-0"
                        }    
                    `}
                    onSwiper={setSwiperInstance}
                    onActiveIndexChange={(e) => setActiveIndex(e.activeIndex)}
                >
                    {children}

                    {/* {slides.map((slide: React.ReactNode, index: number) => (
                        <SwiperSlide key={index}>{slide}</SwiperSlide>
                    ))} */}

                    <SwiperSlide>
                        <FrontSlide />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ArrivalSlide />
                    </SwiperSlide>
                    <SwiperSlide>
                        <LobbySlide />
                    </SwiperSlide>
                    <SwiperSlide>
                        <HousingSlide />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PoolSlide />
                    </SwiperSlide>
                    <SwiperSlide>
                        <BeachSlide />
                    </SwiperSlide>
                </Swiper>
            </main>
        </div>
    );
}

export default MainSwiper;
