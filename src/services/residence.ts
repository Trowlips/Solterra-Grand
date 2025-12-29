import { supabase } from "@/_lib/supabase";
import { unstable_cache } from "next/cache";

export type Residence = {
    id: string;
    name: string;
    category: string;
    type: "villa" | "house" | "cabin";
    regularPrice: number;
    discount: number;
    minCapacity: number;
    maxCapacity: number;
    areaSqFt: number;
    description: string;
    features: string[];
    thumbnailUrl: string;
};

export const getResidences = unstable_cache(
    async function () {
        const { data, error } = await supabase
            .from("residences")
            .select("*")
            .order("name");

        await new Promise((res) => setTimeout(res, 2000));

        if (error) {
            console.error(error);
            throw new Error("Cabins could not be loaded");
        }

        return data;
    },
    ["residences-list"],
    {
        revalidate: 60 * 60, // 60 seconds -> 1min | 1min * 60 = 60min -> 1 hour
        tags: ["residences"],
    }
);
