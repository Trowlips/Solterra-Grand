"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Mousewheel, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function MainSwiper() {
    return (
        <Swiper
            direction="vertical"
            // scrollbar={{
            //     hide: true,
            // }}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            speed={1000}
            modules={[Mousewheel]}
            className="mySwiper"
            onSlideChange={(e) => console.log(e)}
        >
            <SwiperSlide>
                <div className="h-screen w-screen flex justify-center items-center">
                    <video
                        src={"/PV.mp4"}
                        autoPlay
                        muted
                        loop
                        className="w-screen h-full object-cover"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className="flex flex-col justify-center items-center h-screen w-screen bg-amber-300
                "
                >
                    <h2>Slide 2</h2>
                    <div>
                        <button>Next</button>
                    </div>
                </div>
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
