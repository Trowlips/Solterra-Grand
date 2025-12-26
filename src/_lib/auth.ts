import { createMember, getMember } from "@/services/member";
import NextAuth, { Session, NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import { NextRequest } from "next/server";

const authConfig: NextAuthConfig = {
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
            authorization: {
                params: {
                    prompt: "login",
                },
            },
        }),
    ],
    callbacks: {
        // auth is just current session
        authorized({ auth, request }) {
            return !!auth?.user;
        },
        async signIn({ user, account, profile }) {
            if (!user.email || !user.name) return false;
            try {
                const existingGuest = await getMember(user.email);

                if (!existingGuest)
                    await createMember({
                        email: user.email,
                        fullName: user.name,
                    });
                // console.log("sign in: ", user);

                return true;
            } catch {
                return false;
            }
        },
    },
    pages: {
        signIn: "/login",
    },
};

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth(authConfig);
