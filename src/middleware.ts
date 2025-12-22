import { auth } from "@/_lib/auth";
export const middleware = auth;

console.log("middleware running")

export const config = {
    matcher: ["/portal/:path"],
};
