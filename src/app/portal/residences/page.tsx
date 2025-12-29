import ResidenceList from "@/components/Residences/ResidenceList";
import { getResidences } from "@/services/residence";

async function page() {
    const residences = await getResidences();
    // console.log(residences)
    return (
        <div className="h-fit w-full px-10 space-y-8">
            {residences.map((unit) => (
                <div key={unit.name}>
                    <ResidenceList unit={unit}/>
                </div>
            ))}
        </div>
    );
}

export default page;
