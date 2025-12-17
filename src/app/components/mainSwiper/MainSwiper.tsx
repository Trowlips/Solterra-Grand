"use client";
import { Dispatch, SetStateAction } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Controller, Mousewheel, Pagination, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FrontSlide from "./slides/FrontSlide";

import ArrivalSlide from "./slides/ArrivalSlide";
import LobbySlide from "./slides/LobbySlide";
import "./styles.css";
import PoolSlide from "./slides/PoolSlide";
import HousingSlide from "./slides/HousingSlide";

type MainSwiperType = {
    setSwiper: Dispatch<SetStateAction<SwiperType | null>>;
    activeIndex: number;
    setActiveIndex: Dispatch<SetStateAction<number>>;
};

function MainSwiper(props: MainSwiperType) {
    const { setSwiper, activeIndex, setActiveIndex } = props;

    return (
        <Swiper
            direction="vertical"
            // scrollbar={{
            //     hide: true,
            // }}
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
                [&_.swiper-pagination-bullets]:transition-all!
                [&_.swiper-pagination-bullets]:duration-1000!
                ${
                    Boolean(activeIndex)
                        ? "[&_.swiper-pagination-bullets]:opacity-100 [&_.swiper-pagination-bullets]:left-1!"
                        : "[&_.swiper-pagination-bullets]:-left-10! [&_.swiper-pagination-bullets]:opacity-0"
                }    
            `}
            onSwiper={setSwiper}
            onActiveIndexChange={(e) => setActiveIndex(e.activeIndex)}
        >
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
        </Swiper>
    );
}

export default MainSwiper;
