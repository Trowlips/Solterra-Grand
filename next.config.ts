import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    devIndicators: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "adaorfpiaidcjralrdcp.supabase.co",
                port: "",
                pathname: "/storage/v1/object/public/**",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                port: "",
                pathname: "/a/**",
            },
        ],
    },
    async redirects() {
        return [
            {
                source: "/portal",
                destination: "/portal/news",
                permanent: true, // true = 301 redirect, false = 307 temporary
            },
        ];
    },
};

export default nextConfig;
