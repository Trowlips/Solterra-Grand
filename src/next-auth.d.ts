import NextAuth, { type DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            memberId: number;
            memberTier: string;
            memberPoints: number;
        } & DefaultSession["user"];
    }

    interface User {
        memberId?: string | number;
        memberTier: string;
        memberPoints: number;
    }
}
