import Header from "@/components/Header/Header";
import MainSwiper from "@/components/mainSwiper/MainSwiper";

import { auth } from "@/_lib/auth";
import FrontSlide from "@/components/mainSwiper/slides/FrontSlide";
import ArrivalSlide from "@/components/mainSwiper/slides/ArrivalSlide";
import LobbySlide from "@/components/mainSwiper/slides/LobbySlide";
import PoolSlide from "@/components/mainSwiper/slides/PoolSlide";
import HousingSlide from "@/components/mainSwiper/slides/HousingSlide";
import BeachSlide from "@/components/mainSwiper/slides/BeachSlide";
async function AsyncSlideData() {
    const session = await auth();
    console.log(session);
    return (
        <div>Hello {session?.user?.name}, this was fetched on the server!</div>
    );
}

export default function Home() {
    return (
        <div className="bg-background">
            <MainSwiper
                // slides={[
                //     <FrontSlide key={0} />,
                //     <ArrivalSlide key={1} />,
                //     <LobbySlide key={2} />,
                //     <HousingSlide key={3} />,
                //     <PoolSlide key={4} />,
                //     <BeachSlide key={5} />,
                // ]}
            >
                <Header />
            </MainSwiper>
        </div>
    );
}
