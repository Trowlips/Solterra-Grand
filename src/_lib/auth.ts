import NextAuth, { Session } from "next-auth";
import Google from "next-auth/providers/google";
import { NextRequest } from "next/server";

const authConfig = {
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
    ],
    callbacks: {
        // auth is just current session
        authorized({
            auth,
            request,
        }: {
            auth: Session | null;
            request: NextRequest;
        }) {
            console.log(!!auth?.user)
            return !!auth?.user;
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
