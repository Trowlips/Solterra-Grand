import { Residence } from "@/services/residence";
import { Home, Lock, Wind } from "lucide-react";
import ResidenceCard from "./ResidenceCard";

type ResidenceListPropsType = {
    residences: Residence[];
};

function ResidenceList(props: ResidenceListPropsType) {
    const { residences } = props;

    return (
        <div className="h-fit w-full px-10 space-y-8">
            {residences.map((unit: Residence) => (
                <div key={unit.name}>
                    <ResidenceCard unit={unit} />
                </div>
            ))}
        </div>
    );
}

export default ResidenceList;
