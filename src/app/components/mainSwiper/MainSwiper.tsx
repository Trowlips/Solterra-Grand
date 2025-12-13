"use client";
import { Dispatch, SetStateAction } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Controller, Mousewheel, Pagination, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import FrontSlide from "./slides/FrontSlide";

import ArrivalSlide from "./slides/ArrivalSlide";
import LobbySlide from "./slides/LobbySlide";
import "./styles.css";
import PoolSlide from "./slides/PoolSlide";

type MainSwiperType = {
    setSwiper: Dispatch<SetStateAction<SwiperType | null>>;
    setActiveIndex: Dispatch<SetStateAction<number>>;
};

function MainSwiper(props: MainSwiperType) {
    const { setSwiper, setActiveIndex } = props;
    const swiper = useSwiper();

    console.log(swiper);

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
            className="
                mySwiper
                [&_.swiper-pagination-bullet]:bg-red-300!
            "
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
                <PoolSlide />
            </SwiperSlide>
        </Swiper>
    );
}

export default MainSwiper;
