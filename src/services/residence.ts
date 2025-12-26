import { supabase } from "@/_lib/supabase";

export const getResidences = async function () {
    const { data, error } = await supabase
        .from("residences")
        .select("*")
        .order("name");

    // await new Promise((res) => setTimeout(res, 1000));

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be loaded");
    }

    return data;
};
