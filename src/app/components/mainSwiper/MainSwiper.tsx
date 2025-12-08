"use client";
import { Dispatch, SetStateAction } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FrontSlide from "./FrontSlide";
import TerraceSlide from "./TerraceSlide";

type MainSwiperType = {
    setSwiper?: Dispatch<SetStateAction<SwiperType | null>>;
};

function MainSwiper(props: MainSwiperType) {
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
            modules={[Mousewheel, Parallax, Pagination]}
            className="mySwiper"
            // onSlideChange={(e) => console.log(e)}
            onSwiper={props.setSwiper}
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
