import Header from "@/components/Header/Header";
import MainSwiper from "@/components/mainSwiper/MainSwiper";

import { auth } from "@/_lib/auth";
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
            <MainSwiper>
                <Header />
            </MainSwiper>
        </div>
    );
}
