import Header from "@/app/components/header/Header";
import MainSwiper from "./components/mainSwiper/MainSwiper";

export default function Home() {
    return (
        <div className="bg-background">
            <Header />
            <main className="h-screen">
                <MainSwiper />
            </main>
        </div>
    );
}
