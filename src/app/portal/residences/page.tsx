import ResidenceList from "@/components/Residences/ResidenceList";
import { getResidences } from "@/services/residence";

async function page() {
    const residences = await getResidences();
    // console.log(residences)
    return <ResidenceList residences={residences} />;
}

export default page;
