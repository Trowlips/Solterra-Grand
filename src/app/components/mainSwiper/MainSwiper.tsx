"use client";
import { Dispatch, SetStateAction } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Controller, Mousewheel, Pagination, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FrontSlide from "./FrontSlide";
import TerraceSlide from "./TerraceSlide";

import "./styles.css";

type MainSwiperType = {
    setSwiper: Dispatch<SetStateAction<SwiperType | null>>;
    setActiveIndex: Dispatch<SetStateAction<number>>;
};

function MainSwiper(props: MainSwiperType) {
    const { setSwiper, setActiveIndex } = props;
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
            className="mySwiper"
            onSwiper={setSwiper}
            onActiveIndexChange={(e) => setActiveIndex(e.activeIndex)}
        >
            <SwiperSlide>
                <FrontSlide />
            </SwiperSlide>
            <SwiperSlide>
                <TerraceSlide />
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-slide flex flex-row justify-center bg-sky-200">
                    <h2>Slide 3</h2>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default MainSwiper;
