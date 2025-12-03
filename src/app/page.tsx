import Header from "@/app/components/header/Header";

export default function Home() {
    return (
        <div className="bg-background">
            <Header />
            <main className="h-screen">
                <div
                    className="
					bg-gray-600 h-11/12 w-screen flex flex-row justify-center items-center"
                >
                    <span className="text-white">VIDEO CONTENT HERE</span>
                </div>

                <div className="flex flex-row justify-center">
					<h2>Hello world</h2>
				</div>
            </main>
        </div>
    );
}
