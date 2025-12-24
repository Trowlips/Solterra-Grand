import NewsCard from "@/components/Portal/NewsCard";
import Image from "next/image";

const newsItems = [
    {
        id: 1,
        tag: "Event",
        date: "This Weekend",
        title: "Full Moon Cliffside Gala",
        desc: "Join us at the Solara Terrace for an evening of live jazz, cocktails, and stargazing under the full moon. Dress code: Resort Elegant.",
        img: "/resort-terrace.jpg",
    },
    {
        id: 2,
        tag: "Dining",
        date: "New Menu",
        title: "Chef Marco unveils 'Ocean's Deep'",
        desc: "Our Michelin-starred Orizon Restaurant introduces a new 7-course tasting menu focused on sustainable, deep-sea delicacies.",
        img: "/lido-bar.jpg",
    },
    {
        id: 3,
        tag: "Wellness",
        date: "Limited Time",
        title: "Sunrise Yoga at the Peak",
        desc: "Start your morning at the Arrival Pavilion with our visiting master yogi, Elena. Complimentary for Elite members.",
        img: "/resort-lobby.jpg",
    },
];

function page() {
    return (
        <div className="h-full w-full px-10 animate-fade-in-up">
            <div className="grid gap-8">
                <div className="relative rounded-2xl overflow-hidden h-60 sm:h-96 group cursor-pointer shadow-xl">
                    <Image
                        src="/funicular-square.jpg"
                        fill
                        className="w-full h-full object-cover transition-transform 
                        duration-700 group-hover:scale-105"
                        alt="News"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 text-white">
                        <span className="bg-teal-600 px-3 py-1 rounded-full text-[.5rem] sm:text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                            Resort Update
                        </span>
                        <h3 className="text-sm sm:text-3xl font-serif font-bold mb-2">
                            Funicular Maintenance Complete
                        </h3>
                        <p className="text-[.6rem] sm:text-base text-slate-200">
                            The central funicular has been upgraded with new
                            panoramic glass cars. Service to the beach is now
                            faster and offers even clearer views of the cove.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-5">
                    {newsItems.map((item) => (
                        <NewsCard
                            key={item.id}
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            tag={item.tag}
                            date={item.date}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default page;
