import Header from "@/app/components/header/Header";

export default function Home() {
    return (
        <div className="bg-background">
            <Header />
            <main className="h-screen">
                <div
                    className="
					bg-gray-600 h-11/12 w-screen flex justify-center items-center"
                >
                    <video
                        src={"/PV.mp4"}
                        autoPlay
                        muted
                        loop
                        className="w-screen h-full object-cover"
                    />
                </div>

                <div className="flex flex-row justify-center">
                    <h2>Hello world</h2>
                </div>
            </main>
        </div>
    );
}
