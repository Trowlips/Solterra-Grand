import { supabase } from "@/_lib/supabase";

export async function getMember(email: string) {
    const { data, error } = await supabase
        .from("members")
        .select("*")
        .eq("email", email)
        .single();

    // No error here! We handle the possibility of no guest in the sign in callback
    return data;
}

type NewMemberType = {
    email: string;
    fullName: string;
};
export async function createMember(newMember: NewMemberType) {
    const { data, error } = await supabase.from("members").insert([newMember]);

    if (error) {
        console.error(error);
        throw new Error("Guest could not be created");
    }

    return data;
}
