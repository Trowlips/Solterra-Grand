import { getResidences } from "@/services/residence";


async function page() {
    const residences = await getResidences();
    console.log(residences)
    return (
        <div className="h-full w-full px-10 space-y-8">
            
        </div>
    );
}

export default page;
