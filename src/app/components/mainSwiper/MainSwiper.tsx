"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Mousewheel, Pagination, Parallax, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import FrontSlide from "./FrontSlide";
import TerraceSlide from "./TerraceSlide";

function MainSwiper() {
    return (
        <Swiper
            direction="vertical"
            // scrollbar={{
            //     hide: true,
            // }}
            slidesPerView={1}
            mousewheel={true}
            pagination={{clickable: true }}
            speed={1500}
            modules={[Mousewheel, Parallax, Pagination]}
            className="mySwiper"
            onSlideChange={(e) => console.log(e)}
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
